import { useCosmosAccount } from '@cosmostation/use-wallets';
import Button from '@/components/common/button';

export default function SignAmino() {
  const { data } = useCosmosAccount('cosmoshub-4');

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
            console.dir(await data?.methods.signAmino(doc), { depth: 100 });
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        Sign Amino
      </Button>
    </>
  );
}
