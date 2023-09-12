import Button from '@/components/common/button';

import { getCosmosTxProto } from '@cosmostation/wallets';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignDirect() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!window.cosmostation) {
              throw new Error('Cosmostation extension not installed');
            }

            const account = await window.cosmostation.cosmos.request({
              method: 'cos_requestAccount',
              params: { chainName: 'cosmoshub-4' },
            });

            const type = account.isEthermint ? 'ethsep256k1' : 'secp256k1';
            const value = btoa(String.fromCharCode.apply(null, account.publicKey));

            const doc = await getCosmosTxProto({
              chain_id: 'cosmoshub-4',
              public_key: {
                type_url: type,
                key: value,
              },
              signer: account.address,
              messages: [
                {
                  type_url: '/cosmos.bank.v1beta1.MsgSend',
                  value: {
                    from_address: account.address,
                    to_address: account.address,
                    amount: [
                      {
                        denom: 'uatom',
                        amount: '1',
                      },
                    ],
                  },
                },
              ],
              memo: 'Test (Sign Direct)',
            });

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_signDirect',
              params: {
                chainName: 'cosmoshub-4',
                doc,
              },
            });

            setSuccess(response.signature);
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Sign Direct
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
