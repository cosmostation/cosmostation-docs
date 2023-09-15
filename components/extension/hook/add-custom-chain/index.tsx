import { useCosmosWallets } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function AddCustomChain() {
  const { currentWallet } = useCosmosWallets();

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!currentWallet) {
              throw new Error('No Selected Wallet');
            }
            await currentWallet.methods.addChain({
              chain_id: 'custom-chain-1',
              chain_name: 'custom-chain',
              address_prefix: 'custom',
              base_denom: 'ucustom',
              display_denom: 'CUSTOM',
              lcd_url: 'https://rpc.custom-chain.com',
              decimals: 6, // optional
              coin_type: '118', // optional
            });

            setSuccess('Added');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Add Custom Chain
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
