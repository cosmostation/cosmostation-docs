import Button from '@/components/common/button';

import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignAmino() {
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

            const doc = {
              account_number: '1',
              sequence: '1',
              chain_id: 'cosmoshub-4',
              fee: {
                amount: [
                  {
                    denom: 'uatom',
                    amount: '1',
                  },
                ],
                gas: '200000',
              },
              memo: 'Test (Sign Amino)',
              msgs: [
                {
                  type: 'cosmos-sdk/MsgSend',
                  value: {
                    from_address: account.address,
                    to_address: account.address,
                    amount: [
                      {
                        amount: '1',
                        denom: 'uatom',
                      },
                    ],
                  },
                },
              ],
            };

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_signAmino',
              params: { chainName: 'cosmoshub-4', doc },
            });

            setSuccess(response.signature);
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Sign Amino
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
