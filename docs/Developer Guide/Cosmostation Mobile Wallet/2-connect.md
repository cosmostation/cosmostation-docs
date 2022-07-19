---
sidebar_position: 2
---

# Connect

Cosmostation Mobile Wallet supports dApps via WalletConnect.

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
Use CosmostationModal when initializing WalletConnect to use DeepLink and QRCode connect.
```js
import CosmostationWCModal from '@cosmostataion/wc-modal';
```

### Event
By implementing connect/disconnect event, handle connect state event.
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