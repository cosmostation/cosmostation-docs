---
sidebar_position: 2
---

# Connect

Cosmostation Mobile Wallet supports dApps via WalletConnect.

```js
import WalletConnect from "@walletconnect/client";

export async function connect() {
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    signingMethods: [
      "cosmostation_wc_accounts_v1",
      "cosmostation_wc_sign_tx_v1",
    ],
    qrcodeModal: new CosmostationWCModal(),
  });

  await connector.createSession();

  return connector;
}
```

### Modal

Use CosmostationModal when initializing WalletConnect to use DeepLink and QRCode connect.

```bash title="install"
yarn add @cosmostation/wc-modal
```

```js
import CosmostationWCModal from "@cosmostation/wc-modal";
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
