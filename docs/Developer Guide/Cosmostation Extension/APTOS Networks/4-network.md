---
sidebar_position: 4
---

# Network

Get Network via Cosmostation Extension

## Network

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();

  const network = await provider.network();
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

  const network = await provider.network(payload);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

#### Response

```typescript title=Model
export type AptosNetworkResponse = string;
```

```json title=Example
"Mainnet"
```
