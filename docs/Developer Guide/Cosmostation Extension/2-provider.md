---
sidebar_position: 2
---

# Provider

Cosmostation extension support various chains.

### Code using @cosmostation/extension-client

```typescript
import { tendermint, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await tendermint();
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
}
```

### Vanilla Code

```javascript
window.onload = async () => {
  if (!window.cosmostation) {
    alert("Please install cosmostation extension");
  } else {
    // logic
  }
};
```
