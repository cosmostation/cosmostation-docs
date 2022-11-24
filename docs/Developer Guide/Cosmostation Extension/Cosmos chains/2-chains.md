---
sidebar_position: 2
---

# Chains

Get supported chains and add specific chains for using Cosmostation Extension.

## Add chains

### Code using @cosmostation/extension-client

```javascript
try {
  // ...
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
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }

  // exception
}
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

### keplr to cosmostation

```typescript
{
  chainId: chainInfo.chainId,
  addressPrefix: chainInfo.bech32Config.bech32PrefixAccAddr,
  baseDenom: chainInfo.currencies[0].coinMinimalDenom,
  chainName: chainInfo.chainName || chainInfo.chainId,
  displayDenom: chainInfo.currencies[0].coinDenom,
  decimals: chainInfo.currencies[0].coinDecimals,
  restURL: chainInfo.rest,
  coinType: String(chainInfo.bip44.coinType),
  gasRate: chainInfo.gasPriceStep
    ? {
        tiny: String(chainInfo.gasPriceStep.low),
        low: String(chainInfo.gasPriceStep.average),
        average: String(chainInfo.gasPriceStep.high),
      }
    : undefined,
}
```

```typescript
export interface KeplrChainInfo {
  readonly rpc: string;
  readonly rpcConfig?: AxiosRequestConfig;
  readonly rest: string;
  readonly restConfig?: AxiosRequestConfig;
  readonly chainId: string;
  readonly chainName: string;
  readonly stakeCurrency: Currency;
  readonly walletUrl?: string;
  readonly walletUrlForStaking?: string;
  readonly bip44: BIP44;
  readonly alternativeBIP44s?: BIP44[];
  readonly bech32Config: Bech32Config;
  readonly currencies: AppCurrency[];

  readonly feeCurrencies: FeeCurrency[];
  readonly features?: string[];

  readonly beta?: boolean;
}
```

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

## Supported chainIds

### Code using @cosmostation/extension-client

```javascript
const supportedChains = await provider.getSupportedChainIds();
```

### Vanilla Code

```javascript
const supportedChainIds = await window.cosmostation.cosmos.request({
  method: "cos_supportedChainIds",
});
```

#### Response

```typescript title="Model"
type SupportedChainIdsResponse = {
  official: string[];
  unofficial: string[];
};
```

```json title="Example"
{
  "official": ["cosmoshub-4", "gravity-bridge-3"],
  "unofficial": ["columbus-5", "agoric-3"]
}
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

## Activated chainIds

### Code using @cosmostation/extension-client

```javascript
const activatedChainIds = await provider.getActivatedChainIds();
```

### Vanilla Code

```javascript
const activatedChainIds = await window.cosmostation.cosmos.request({
  method: "cos_activatedChainIds",
});
```

#### Response

```typescript title="Model"
type ActivatedChainIdsResponse = string[];
```

```json title="Example"
["cosmoshub-4", "gravity-bridge-3"]
```
