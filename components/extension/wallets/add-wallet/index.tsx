declare global {
  interface Window {
    keplr: any;
  }
}

import Button from '@/components/common/button';
import { registerCosmosWallet, CosmosRegisterWallet } from '@cosmostation/wallets';
import { useCosmosWallets } from '@cosmostation/use-wallets';
import styles from './index.module.scss';
import Image from 'next/image';

export default function AddWallet() {
  const { cosmosWallets } = useCosmosWallets();
  return (
    <>
      <Button
        onClick={() => {
          if (!window.keplr) {
            alert('Keplr extension is not installed');
            return;
          }

          const wallet: CosmosRegisterWallet = {
            name: 'Keplr',
            logo: 'https://wallet.keplr.app/keplr-brand-assets/keplr-logo.svg',
            events: {
              on(type, listener) {
                if (type === 'AccountChanged') {
                  window.addEventListener('keplr_keystorechange', listener);
                }
              },
              off(type, listener) {
                if (type === 'AccountChanged') {
                  window.removeEventListener('keplr_keystorechange', listener);
                }
              },
            },
            methods: {
              getSupportedChainIds: async () => {
                return ['cosmoshub-4'];
              },
              connect: async (chainIds) => {
                const cIds = typeof chainIds === 'string' ? [chainIds] : chainIds;
                const supportedChainIds = await wallet.methods.getSupportedChainIds();

                if (!cIds.every((cId) => supportedChainIds.includes(cId))) {
                  throw new Error('Unsupported chainId is exist');
                }

                await window.keplr.enable(chainIds);
              },
              getAccount: async (chainId) => {
                const response = await window.keplr.getKey(chainId);

                return {
                  address: response.bech32Address,
                  name: response.name,
                  public_key: {
                    type: response.algo,
                    value: Buffer.from(response.pubKey).toString('base64'),
                  },
                  is_ledger: response.isNanoLedger,
                };
              },
              signAmino: async (chainId, document, options) => {
                if (typeof options?.edit_mode?.fee === 'boolean') {
                  window.keplr.defaultOptions.sign.preferNoSetFee = options.edit_mode.fee;
                }

                if (typeof options?.edit_mode?.memo === 'boolean') {
                  window.keplr.defaultOptions.sign.preferNoSetMemo = options.edit_mode.memo;
                }

                if (typeof options?.is_check_balance === 'boolean') {
                  window.keplr.defaultOptions.sign.disableBalanceCheck = options.is_check_balance;
                }

                const signer =
                  options?.signer || (await wallet.methods.getAccount(chainId)).address;

                const response = await window.keplr.signAmino(chainId, signer, document);

                return {
                  signature: response.signature.signature,
                  signed_doc: response.signed,
                };
              },
              signDirect: async (chainId, document, options) => {
                if (typeof options?.edit_mode?.fee === 'boolean') {
                  window.keplr.defaultOptions.sign.preferNoSetFee = options.edit_mode.fee;
                }

                if (typeof options?.edit_mode?.memo === 'boolean') {
                  window.keplr.defaultOptions.sign.preferNoSetMemo = options.edit_mode.memo;
                }

                if (typeof options?.is_check_balance === 'boolean') {
                  window.keplr.defaultOptions.sign.disableBalanceCheck = !options.is_check_balance;
                }

                const account = await wallet.methods.getAccount(chainId);

                if (account.is_ledger) {
                  throw new Error('Ledger is not supported');
                }

                const signer = options?.signer || account.address;

                const signingDoc = {
                  accountNumber: document.account_number,
                  authInfoBytes: document.auth_info_bytes,
                  chainId: document.chain_id,
                  bodyBytes: document.body_bytes,
                };

                const response = await window.keplr.signDirect(chainId, signer, signingDoc);

                return {
                  signature: response.signature.signature,
                  signed_doc: {
                    auth_info_bytes: response.signed.authInfoBytes,
                    body_bytes: response.signed.bodyBytes,
                  },
                };
              },
              sendTransaction: async (chainId, tx_bytes, mode) => {
                const broadcastMode =
                  mode === 1 ? 'block' : mode === 2 ? 'sync' : mode === 3 ? 'async' : 'sync';

                const txBytes =
                  typeof tx_bytes === 'string'
                    ? new Uint8Array(Buffer.from(tx_bytes, 'base64'))
                    : tx_bytes;

                const response = await window.keplr.sendTx(chainId, txBytes, broadcastMode);

                const txHash = Buffer.from(response).toString('hex').toUpperCase();

                return txHash;
              },
              addChain: async (chain) => {
                const coinType = chain.coin_type
                  ? Number(chain.coin_type.replaceAll("'", ''))
                  : 118;

                await window.keplr.experimentalSuggestChain({
                  chainId: chain.chain_id,
                  chainName: chain.chain_name,
                  rpc: chain.lcd_url,
                  rest: chain.lcd_url,
                  bip44: {
                    coinType,
                  },
                  bech32Config: {
                    bech32PrefixAccAddr: chain.address_prefix,
                    bech32PrefixAccPub: chain.address_prefix + 'pub',
                    bech32PrefixValAddr: chain.address_prefix + 'valoper',
                    bech32PrefixValPub: chain.address_prefix + 'valoperpub',
                    bech32PrefixConsAddr: chain.address_prefix + 'valcons',
                    bech32PrefixConsPub: chain.address_prefix + 'valconspub',
                  },
                  currencies: [
                    {
                      coinDenom: chain.display_denom,
                      coinMinimalDenom: chain.base_denom,
                      coinDecimals: chain.decimals || 6,
                      coinGeckoId: chain.coingecko_id || 'unknown',
                    },
                  ],
                  feeCurrencies: [
                    {
                      coinDenom: chain.display_denom,
                      coinMinimalDenom: chain.base_denom,
                      coinDecimals: chain.decimals || 6,
                      coinGeckoId: chain.coingecko_id || 'unknown',
                      gasPriceStep: {
                        low: chain?.gas_rate?.tiny ? Number(chain?.gas_rate?.tiny) : 0.01,
                        average: chain?.gas_rate?.low ? Number(chain?.gas_rate?.low) : 0.025,
                        high: chain?.gas_rate?.average ? Number(chain?.gas_rate?.average) : 0.04,
                      },
                    },
                  ],
                  stakeCurrency: {
                    coinDenom: chain.display_denom,
                    coinMinimalDenom: chain.base_denom,
                    coinDecimals: chain.decimals || 6,
                    coinGeckoId: chain.coingecko_id || 'unknown',
                  },
                });
              },
            },
          };

          registerCosmosWallet(wallet);
        }}
      >
        Register Keplr Wallet
      </Button>
      <div className={styles.container}>
        <div>Registered Wallets</div>
        {cosmosWallets.map((wallet) => (
          <div className={styles.buttonContainer} key={wallet.id}>
            <Button onClick={() => {}}>
              <div className={styles.wallet}>
                <Image src={wallet.logo} alt={wallet.name} width={40} height={40} />{' '}
                <div className={styles.walletName}>{wallet.name}</div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
