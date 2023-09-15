import { useCosmosAccount } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignMessage() {
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

            const response = await data.methods.signMessage(message);

            setSuccess(response.signature);
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Sign Message
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
