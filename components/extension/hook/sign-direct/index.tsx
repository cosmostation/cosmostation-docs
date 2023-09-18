import { useCosmosAccount } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignAmino() {
  const chainId = 'cosmoshub-4';
  const { data } = useCosmosAccount(chainId);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!data) {
              throw new Error('No data');
            }

            const docs = await getCosmosTxProto({
              chain_id: chainId,
              public_key: {
                type_url: data?.account.public_key.type,
                key: data?.account.public_key.value,
              },
              signer: data?.account.address,
              messages: [
                {
                  type_url: '/cosmos.bank.v1beta1.MsgSend',
                  value: {
                    from_address: data?.account.address,
                    to_address: data?.account.address,
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

            const response = await data?.methods.signDirect(docs);

            console.log(response);

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
