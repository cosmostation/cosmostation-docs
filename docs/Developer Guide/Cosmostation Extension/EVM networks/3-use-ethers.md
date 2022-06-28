---
sidebar_position: 3
---

# Use ethers

- [npmjs](https://www.npmjs.com/package/ethers)
- [docs](https://docs.ethers.io)

```typescript
import { ethers } from "ethers";
import { ethereum, InstallError } from "@cosmostation/extension-client";
try {
  const provider = await ethereum();
  const ethersProvider = new ethers.providers.Web3Provider(provider);
  // requestAccounts
  const accounts = ethersProvider.send("eth_requestAccounts", []);
  // If you want more info, please check out ethers docs (https://docs.ethers.io)
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
  // exception
}
```
