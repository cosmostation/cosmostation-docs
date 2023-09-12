import Button from '@/components/common/button';

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
            if (!window.cosmostation) {
              throw new Error('Cosmostation extension not installed');
            }

            const account = await window.cosmostation.cosmos.request({
              method: 'cos_requestAccount',
              params: { chainName: 'cosmoshub-4' },
            });

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
