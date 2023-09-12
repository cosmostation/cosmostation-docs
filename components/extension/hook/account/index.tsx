import { useCosmosAccount } from '@cosmostation/use-wallets';
import Button from '@/components/common/button';

import { Callout } from 'nextra-theme-docs';

export default function Account() {
  const { data, error, mutate } = useCosmosAccount('cosmoshub-4');

  return (
    <>
      <Button onClick={() => mutate()}>Request Account</Button>
      {data && <Callout>{data?.account.address}</Callout>}
      {error && <Callout type="error">{error}</Callout>}
    </>
  );
}
