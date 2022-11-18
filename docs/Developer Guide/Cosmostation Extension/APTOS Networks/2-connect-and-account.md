---
sidebar_position: 2
---

# Connect, Account

connect and get Account via Cosmostation Extension

## Connect

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();

  const account = await provider.connect();
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

### Vanilla Code

```javascript
const provider = aptos();
try {
  const account = await provider.connect();
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

#### Response

```typescript title=Model
export type AptosConnectResponse = {
  address: string;
  publicKey: string;
};
```

```json title=Example
{
  "address": "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
  "publicKey": "0x503603cb3ea1801805b952d9d4c6a7302dddfa78cc15042e78132ee907e6b48f"
}
```

## Account

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();

  const account = await provider.account();
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

### Vanilla Code

```javascript
try {
  const provider = aptos();

  const account = await provider.account(payload);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

#### Response

```typescript title=Model
export type AptosAccountResponse = {
  address: string;
  publicKey: string;
};
```

```json title=Example
{
  "address": "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
  "publicKey": "0x503603cb3ea1801805b952d9d4c6a7302dddfa78cc15042e78132ee907e6b48f"
}
```
