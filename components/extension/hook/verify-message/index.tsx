import { useCosmosAccount } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function VerifyMessage() {
  const chainId = 'cosmoshub-4';
  const { data } = useCosmosAccount(chainId);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <Button
        onClick={async () => {
          try {
            const message = '(test) sign message';

            if (!data) {
              throw new Error('No data');
            }

            if (!data.methods.signMessage) {
              throw new Error('No signMessage method');
            }

            if (!data.methods.verifyMessage) {
              throw new Error('No verifyMessage method');
            }

            const response = await data.methods.signMessage(message);

            const verify = await data.methods.verifyMessage(message, response.signature);

            setSuccess(verify ? 'verified' : 'not verified');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Verify Message
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
