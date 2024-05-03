import { useCosmosWallets } from '@cosmostation/use-wallets';
import { getCosmosTxProto } from '@cosmostation/wallets';
import Button from '@/components/common/button';
import { useState } from 'react';
import { Callout } from 'nextra-theme-docs';

export default function SupportedChainIds() {
  const { currentWallet } = useCosmosWallets();

  const [supportedChainIds, setSupportedChainIds] = useState<string[]>([]);
  const [error, setError] = useState('');

  return (
    <>
      <Button
        onClick={async () => {
          try {
            if (!currentWallet) {
              throw new Error('No Selected Wallet');
            }
            const response = await currentWallet.methods.getSupportedChainIds();

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
