import { useCosmosAccount } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';

export default function SignAmino() {
  const chainId = 'cosmoshub-4';
  const { data } = useCosmosAccount(chainId);

  return (
    <>
      <Button
        onClick={async () => {
          try {
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
            console.dir(await data?.methods.signDirect(docs), { depth: 100 });
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        Sign Direct
      </Button>
    </>
  );
}
