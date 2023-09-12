import Button from '@/components/common/button';

import { cosmosFunctions } from '@cosmostation/extension';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function AddCustomChain() {
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

            const response = await window.cosmostation.cosmos.request({
              method: 'cos_addChain',
              params: {
                chainId: 'custom-chain-1',
                chainName: 'custom-chain',
                addressPrefix: 'custom',
                baseDenom: 'ucustom',
                displayDenom: 'CUSTOM',
                restURL: 'https://rpc.custom-chain.com',
                decimals: 6, // optional
                coinType: '118', // optional
              },
            });

            setSuccess(response ? 'Success' : '');
            setError('');
          } catch (e) {
            setSuccess('');
            setError(e.message);
          }
        }}
      >
        Add a custom chain
      </Button>
      {success && <Callout>{success}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
