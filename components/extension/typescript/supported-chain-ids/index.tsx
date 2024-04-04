import Button from '@/components/common/button';

import { cosmosFunctions } from '@cosmostation/extension';
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
            const response = await cosmosFunctions.getSupportedChainIds();

            setSupportedChainIds(response);
            setError('');
          } catch (e) {
            setSupportedChainIds([]);
            setError(e.message);
          }
        }}
      >
        Request Supported Chain Ids
      </Button>
      {!!supportedChainIds.length && <Callout>{supportedChainIds.join(', ')}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
