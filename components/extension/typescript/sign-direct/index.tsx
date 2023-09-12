import Button from '@/components/common/button';

import { cosmos } from '@cosmostation/extension';
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
            const provider = await cosmos('cosmoshub-4');
            const account = await provider.requestAccount();

            const doc = await getCosmosTxProto({
              chain_id: 'cosmoshub-4',
              public_key: {
                type_url: account.public_key.type,
                key: account.public_key.value,
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

            const response = await provider.signDirect(doc);

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
