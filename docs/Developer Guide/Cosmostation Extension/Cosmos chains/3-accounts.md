---
sidebar_position: 3
---

# Accounts

Using Cosmostation Extension accounts.

## Get Accounts

### Code using @cosmostation/extension-client

```javascript
const account = await provider.getAccount("cosmoshub-4");
```

### Vanilla Code

```javascript
const accoutn = await window.cosmostation.cosmos.request({
  method: "cos_account",
  params: { chainName: "cosmoshub-4" },
});
```

> ### If connected successfully, it will look like below.
>
> ![Provider](/img/developer/extension/2-provider-connected.png)

#### Response

```typescript title="Model"
type AccountResponse = {
  name: string;
  address: string;
  publicKey: Uint8Array;
  isLedger: boolean;
};
```

```json title="Example"
{
  "name": "account name",
  "address": "cosmos1wgeoiheoighwoighwioeghoweghoiweghiow",
  "publicKey": [
    3, 77, 9, 189, 251, 249, 150, 235, 192, 56, 51, 98, 56, 242, 12, 102, 144,
    211, 89, 42, 187, 170
  ],
  "isLedger": false
}
```

## Request Account (Popup)

### Code using @cosmostation/extension-client

```typescript
try {
  // ...
  const account = await provider.requestAccount("cosmoshub-4");
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
const accoutn = await window.cosmostation.cosmos.request({
  method: "cos_requestAccount",
  params: { chainName: "cosmoshub-4" },
});
```

#### Response

```typescript title=Model
type RequestAccountResponse = {
  name: string;
  address: string;
  publicKey: Uint8Array;
  isLedger: boolean;
};
```

```json title=Example
{
  "name": "account name",
  "address": "cosmos1wgeoiheoighwoighwioeghoweghoiweghiow",
  "publicKey": [
    3, 77, 9, 189, 251, 249, 150, 235, 192, 56, 51, 98, 56, 242, 12, 102, 144,
    211, 89, 42, 187, 170
  ],
  "isLedger": false
}
```
