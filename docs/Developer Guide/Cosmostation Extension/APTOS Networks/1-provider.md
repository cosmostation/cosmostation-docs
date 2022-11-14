---
sidebar_position: 1
---

# Provider

Cosmostation extension support various chains.

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
}
```

### Vanilla Code

```javascript
const isCosmostation = "cosmostation" in window;

const aptos = () => {
  if ("cosmostation" in window) {
    return window.cosmostation.aptos;
  } else {
    window.open("https://cosmostation.io/wallet/#extension");
    /**
     * or window.open("https://chrome.google.com/webstore/detail/cosmostation/fpkhgmpbidmiogeglndfbkegfdlnajnf");
     * */
  }
};

const provider = aptos();
```
