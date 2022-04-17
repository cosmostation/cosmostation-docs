---
sidebar_position: 3
---

# Get Accounts

Get Accounts from support chains:

```js title="Add support chains"
const supportedChains = await extensionConnector.getSupportedChains();

if(![...supportedChains.official, ...supportedChains.unofficial].includes(CHAIN_NAME)) {
  await extensionConnector.addChain({
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
    addressPrefix:'cre',
    baseDenom: DENOM,
    displayDenom: DISPLAY_DENOM,
    restURL: 'https://lcd-endpoint',
  })
}
```

```js title="Get Account"
const accountInfo = await extensionConnector.requestAccount(CHAIN_NAME);
```