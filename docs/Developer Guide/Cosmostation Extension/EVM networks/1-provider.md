---
sidebar_position: 1
---

# Provider

Cosmostation extension support various chains.

### Code using @cosmostation/extension-client

```typescript
import { ethereum, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await ethereum();
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