import Button from '@/components/common/button';

import { cosmos } from '@cosmostation/extension';
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
            const provider = await cosmos('cosmoshub-4');

            const text = 'Test (Sign Message)';

            const signResponse = await provider.signMessage(text);

            const verifyResponse = await provider.verifyMessage(text, signResponse.signature);

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
