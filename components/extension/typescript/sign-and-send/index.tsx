import Button from '@/components/common/button';

import { cosmos } from '@cosmostation/extension';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignAndSend() {
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
            const provider = await cosmos('cosmoshub-4');
            const account = await provider.requestAccount();

            const response = await provider.signAndSendTransaction({
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
              memo: 'Test (Sign And Send Transaction)',
            });

            setSuccess(response);
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
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
