import { useCosmosAccount } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function Disconnect() {
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

            const response = await data.methods.disconnect();

            setSuccess('disconnected');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Disconnect
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
