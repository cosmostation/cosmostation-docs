---
sidebar_position: 5
---

# Event

## AccountChange

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

const handler = (account) => console.log(account);

try {
  const provider = await aptos();

  provider.onAccountChange(handler);

  // if you want to remove the listener
  provider.offAccountChange(handler);
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
}
```

### Vanilla Code

```javascript
const handler = (account) => console.log(account);

try {
  const provider = aptos();

  provider.onAccountChange(handler);

  // if you want to remove the listener
  provider.offAccountChange(handler);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

## NetworkChange

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

const handler = (network) => console.log(network);

try {
  const provider = await aptos();

  provider.onNetworkChange(handler);

  // if you want to remove the listener
  provider.offNetworkChange(handler);
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
}
```

### Vanilla Code

```javascript
const handler = (network) => console.log(network);

try {
  const provider = aptos();

  provider.onNetworkChange(handler);

  // if you want to remove the listener
  provider.offNetworkChange(handler);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```
