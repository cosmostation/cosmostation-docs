import Button from '@/components/common/button';

import { cosmos } from '@cosmostation/extension';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function Disconnect() {
  const [error, setError] = useState('');

  const [address, setAddress] = useState('');
  return (
    <>
      <Button
        onClick={async () => {
          try {
            const provider = await cosmos('cosmoshub-4');
            await provider.disconnect();

            setAddress('disconnected');
            setError('');
          } catch (e) {
            setAddress('');
            setError(e.message);
          }
        }}
      >
        Disconnect
      </Button>
      {address && <Callout>{address}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
