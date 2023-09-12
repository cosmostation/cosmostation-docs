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

            await window.cosmostation.cosmos.request({
              method: 'cos_addTokensCW20',
              params: {
                chainName: 'juno-1',
                tokens: [
                  {
                    contractAddress:
                      'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
                  },
                ],
              },
            });

            setSuccess('added');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Add CW20 Tokens
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
