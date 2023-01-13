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
const ethereum = () => {
  if ("cosmostation" in window) {
    return window.cosmostation.ethereum;
  } else {
    window.open("https://cosmostation.io/wallet/#extension");
    /**
     * or window.open("https://chrome.google.com/webstore/detail/cosmostation/fpkhgmpbidmiogeglndfbkegfdlnajnf");
     * */
  }
};

const provider = ethereum();
```
