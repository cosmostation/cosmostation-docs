import Button from '@/components/common/button';

import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SupportedChainIds() {
  const [error, setError] = useState('');

  const [supportedChainIds, setSupportedChainIds] = useState<string[]>([]);

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!window.cosmostation) {
              throw new Error('Cosmostation extension not installed');
            }

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_supportedChainIds',
            });

            const supportedChainIds = [...response.official, ...response.unofficial];

            setSupportedChainIds(supportedChainIds);
            setError('');
          } catch (e) {
            setSupportedChainIds([]);
            setError(e.message);
          }
        }}
      >
        Request Supported Chain IDs
      </Button>
      {!!supportedChainIds.length && <Callout>{supportedChainIds.join(', ')}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
