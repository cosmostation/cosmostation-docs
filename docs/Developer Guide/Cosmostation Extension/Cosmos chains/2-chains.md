---
sidebar_position: 2
---

# Chains

Get supported chains and add specific chains for using Cosmostation Extension.

## Supported chains

### Code using @cosmostation/extension-client

```javascript
const supportedChains = await provider.getSupportedChains();
```

### Vanilla Code

```javascript
const supportedChains = await window.cosmostation.cosmos.request({
  method: "cos_supportedChainNames",
});
```

#### Response

```typescript title="Model"
type SupportedChainNamesResponse = {
  official: string[]; // lowercase
  unofficial: string[]; // lowercase
};
```

```json title="Example"
{
  "official": ["cosmos", "osmosis"],
  "unofficial": ["test"]
}
```

## Add chains

### Code using @cosmostation/extension-client

```javascript
await provider.addChain({
  chainId: "cerberus-chain-1",
  chainName: "cerberus",
  addressPrefix: "cre",
  baseDenom: "ucrbrus",
  displayDenom: "CRBRUS",
  restURL: "https://lcd-office.cosmostation.io/mooncat-1-1",
  coinType: "118", // optional (default: '118')
  decimals: 6, // optional (default: 6)
  gasRate: {
    // optional (default: { average: '0.025', low: '0.0025', tiny: '0.00025' })
    average: "0.2",
    low: "0.02",
    tiny: "0.002",
  },
  sendGas: "80000", // optional (default: '100000')
  type: "ETHERMINT", // optional (default: '')
});
```

### Vanilla Code

```javascript
await window.cosmostation.cosmos.request({
  method: "cos_addChain",
  params: {
    chainId: "cerberus-chain-1",
    chainName: "cerberus",
    addressPrefix: "cre",
    baseDenom: "ucrbrus",
    displayDenom: "CRBRUS",
    restURL: "https://lcd-office.cosmostation.io/mooncat-1-1",
    coinType: "118", // optional (default: '118')
    decimals: 6, // optional (default: 6)
    gasRate: {
      // optional (default: { average: '0.025', low: '0.0025', tiny: '0.00025' })
      average: "0.2",
      low: "0.02",
      tiny: "0.002",
    },
    sendGas: "80000", // optional (default: '100000')
    type: "ETHERMINT", // optional (default: '')
  },
});
```

#### Response

```typescript title="Model"
type addChainResponse = boolean;
```

```json title="Example"
true
```

## Activated chains

### Code using @cosmostation/extension-client

```javascript
const activatedChains = await provider.getActivatedChains();
```

### Vanilla Code

```javascript
const activatedChains = await window.cosmostation.cosmos.request({
  method: "cos_activatedChainNames",
});
```

#### Response

```typescript title="Model"
type ActivatedChainNamesResponse = string[]; // lowercase
```

```json title="Example"
["cosmos", "osmosis"]
```
