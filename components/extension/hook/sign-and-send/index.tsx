import { useCosmosAccount } from '@cosmostation/use-wallets';
import Button from '@/components/common/button';
import { Callout } from 'nextra-theme-docs';

export default function SignAndSend() {
  const chainId = 'cosmoshub-4';
  const { data } = useCosmosAccount(chainId);

  return (
    <>
      <Callout type="error">
        The actual transaction is executed. If you don't want to, don't sign.
      </Callout>
      <br />
      <Button
        onClick={async () => {
          try {
            console.dir(
              await data?.methods.signAndSendTransaction({
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
              }),

              { depth: 100 },
            );
          } catch (e) {
            console.log(e.message);
          }
        }}
      >
        Sign And Send Transaction
      </Button>
    </>
  );
}
