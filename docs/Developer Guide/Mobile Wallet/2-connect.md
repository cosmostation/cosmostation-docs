---
sidebar_position: 2
---

# Connect

Cosmostation Mobile Wallet support wallet connect.

```js
import WalletConnect from '@walletconnect/client';

export async function connect() {
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    signingMethods: ['cosmostation_wc_accounts_v1', 'cosmostation_wc_sign_tx_v1'],
    qrcodeModal: CosmostationWCModal,
  });

  await connector.createSession();
  
  return connector;
}
```
### Modal
On initialize WalletConnect using CosmostationModal to use DeepLink and QRCode connect.
```js
import CosmostationWCModal from '@cosmostataion/wc-modal';
```
:::warning
Not deploy yet. Please using below code.

https://github.com/cosmostation/wc-example/tree/master/src/modal
:::

### Event
Implement connect event
```js
const connector = await connect();

connector.on("connect", (error, payload) => {
  if (error) {
    setConnected(false);
    throw error;
  }
  setConnected(true);
});

connector.on("disconnect", (error, payload) => {
  setConnected(false);
});
```