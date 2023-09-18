import { useCosmosAccount } from '@cosmostation/use-wallets';
import Button from '@/components/common/button';
import { Callout } from 'nextra-theme-docs';
import { useState } from 'react';

export default function SignAndSend() {
  const chainId = 'cosmoshub-4';
  const { data } = useCosmosAccount(chainId);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <>
      <Callout type="error">
        The actual transaction is executed. If you don't want to, don't sign.
      </Callout>
      <br />
      <Button
        onClick={async () => {
          try {
            if (!data) {
              throw new Error('No data');
            }

            const response = await data?.methods.signAndSendTransaction({
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
              memo: 'Test (Sign And Send Transaction)',
            });

            setSuccess(response);
            setError('');
          } catch (e) {
            setError(e.message);
            setSuccess('');
          }
        }}
      >
        Sign And Send Transaction
      </Button>
      {success && (
        <Callout>
          <a href={`https://mintscan.io/cosmos/txs/${success}`} target="_blank">
            {success}
          </a>
        </Callout>
      )}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
