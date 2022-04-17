---
sidebar_position: 2
---

# Connector

Cosmostation extension support various chains.

```js
import WalletConnect from '@walletconnect/client';

export async function connect() {
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    signingMethods: ['cosmostation_wc_keys_v1', 'cosmostation_wc_sign_amino_v1'],
    qrcodeModal: CosmostationQRCodeModal,
  });

  if (connector.connected) {
    await connector.killSession();
  }

  await connector.createSession();
  
  return connector;
}
```

```js title="connect-example"
const connect = async () => {
  const connector = await keplrWalletConnect.connect();
  setConnector(connector);
  connector.on("connect", (error, payload) => {
    if (error) {
      setConnected(false);
      throw error;
    }
    setConnected(true);
  });
};
```