---
sidebar_position: 5
---

# Sign Message

Sign Message via Cosmostation Extension

## Sign Message

### Code using @cosmostation/extension-client

```typescript
try {
  // ...
  const response = await provider.signMessage(
    "cosmoshub-4",
    "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p", // signer
    "message!!!!" // message
  );
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
const response = await window.cosmostation.cosmos.request({
  method: "cos_signMessage",
  params: {
    chainName: "cosmoshub-4",
    signer: "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
    message: "message!!!!",
  },
});
```

#### Response

```typescript title=Model
export type SignMessageResponse = {
  signature: string;
  pub_key: { type: string; value: string };
};
```

```json title=Example
{
  "pub_key": {
    "type": "tendermint/PubKeySecp256k1",
    "value": "A00Jvfv5luvAODNiOPIMZpDTWSq7qvoFV8k7ptdsDqLU"
  },
  "signature": "signature=="
}
```

## VerifyMessage

### Code using @cosmostation/extension-client

```typescript
try {
  const response = await provider.signMessage(
    "cosmoshub-4",
    "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
    "message!!!!"
  );

  const result = await provider.verifyMessage(
    "cosmoshub-4",
    "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
    "message!!!!",
    response
  );
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
const response = await window.cosmostation.cosmos.request({
  method: "cos_signMessage",
  params: {
    chainName: "cosmoshub-4",
    signer: "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
    message: "message!!!!",
  },
});

const result = await window.cosmostation.cosmos.request({
  method: "cos_verifyMessage",
  params: {
    chainName: "cosmoshub-4",
    signer: "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
    message: "message!!!!",
    publicKey: response.pub_key.value,
    signature: response.signature,
  },
});
```

#### Response

```typescript title=Model
export type VerifyMessageResponse = boolean;
```

```json title=Example
true
```
