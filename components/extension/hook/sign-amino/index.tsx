import { useCosmosAccount } from '@cosmostation/use-wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignAmino() {
  const { data } = useCosmosAccount('cosmoshub-4');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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
          from_address: data?.account.address,
          to_address: data?.account.address,
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

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!data) {
              throw new Error('No data');
            }

            const success = await data.methods.signAmino(doc);

            setSuccess(success.signature);
            setError('');
          } catch (e) {
            setError(e.message);
            setSuccess('');
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
