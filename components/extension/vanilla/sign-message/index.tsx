import Button from '@/components/common/button';

import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SignMessage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_signMessage',
              params: {
                chainName: 'cosmoshub-4',
                message: 'Test (Sign Message)',
                signer: account.address,
              },
            });

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
