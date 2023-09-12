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

            const message = 'Test (Sign Message)';

            const account = await window.cosmostation.cosmos.request({
              method: 'cos_requestAccount',
              params: { chainName: 'cosmoshub-4' },
            });

            const signResponse = await window.cosmostation.cosmos.request({
              method: 'cos_signMessage',
              params: {
                chainName: 'cosmoshub-4',
                message,
                signer: account.address,
              },
            });

            const verifyResponse = await window.cosmostation.cosmos.request({
              method: 'cos_verifyMessage',
              params: {
                chainName: 'cosmoshub-4',
                message,
                signer: account.address,
                publicKey: signResponse.pub_key.value,
                signature: signResponse.signature,
              },
            });

            setSuccess(verifyResponse ? 'verified' : 'not verified');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Sign & Verify Message
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
