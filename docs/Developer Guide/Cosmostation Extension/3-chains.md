---
sidebar_position: 3
---

# Chains

Get supported chains and add specific chains for using Cosmostation Extension.

## Supported chains

```typescript
const supportedChains = await provider.getSupportedChains();
```

### Response

```typescript title="Model"
type SupportedChainNamesResponse = {
  official: string[];
  unofficial: string[];
};
```
```json title="Example"
{
  "official": ["cosmos", "osmosis"],
  "unofficial": ["test"]
}
```

## Add chains

```js
if (![...supportedChains.official, ...supportedChains.unofficial].includes('cerberus')) {
  await provider.addChain({
    chainId: 'cerberus-chain-1',
    chainName: 'cerberus',
    addressPrefix: 'cre',
    baseDenom: 'ucrbrus',
    displayDenom: 'CRBRUS',
    restURL: 'https://lcd-office.cosmostation.io/mooncat-1-1',
    coinType: '118', // optional (default: '118')
    decimals: 6, // optional (default: 6)
    gasRate: {
      // optional (default: { average: '0.025', low: '0.0025', tiny: '0.00025' })
      average: '0.2',
      low: '0.02',
      tiny: '0.002',
    },
    sendGas: '80000', // optional (default: '100000')
  });
}
```
### Response

```typescript title="Model"
type addChainResponse = boolean;
```
```json title="Example"
true
```