import Button from '@/components/common/button';

import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function MultiAccount() {
  const [error, setError] = useState('');

  const [addresses, setAddresses] = useState<string[]>([]);

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!window.cosmostation) {
              throw new Error('Cosmostation extension not installed');
            }

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_requestAccounts',
              params: {
                chainIds: ['cosmoshub-4', 'quasar-1', 'archway-1', 'neutron-1', 'celestia'],
              },
            });

            const addresses = response.map((item) => item.address);

            setAddresses(addresses);
            setError('');
          } catch (e) {
            setAddresses([]);
            setError(e.message);
          }
        }}
      >
        Request Multiple Accounts
      </Button>
      {!!addresses.length && <Callout>{addresses.join(', ')}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
