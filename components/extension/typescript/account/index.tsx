import Button from '@/components/common/button';

import { cosmos } from '@cosmostation/extension';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function Account() {
  const [error, setError] = useState('');

  const [address, setAddress] = useState('');
  return (
    <>
      <Button
        onClick={async () => {
          try {
            const provider = await cosmos('cosmoshub-4');
            const account = await provider.requestAccount();

            setAddress(account.address);
            setError('');
          } catch (e) {
            setAddress('');
            setError(e.message);
          }
        }}
      >
        Request Account
      </Button>
      {address && <Callout>{address}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
