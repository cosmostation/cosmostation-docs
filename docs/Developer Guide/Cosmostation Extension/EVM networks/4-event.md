---
sidebar_position: 4
---

# Event

## accountsChanged

If current account is connected to the dApp, return an array of address. Otherwise, return an empty array.

```typescript
import { ethers } from "ethers";
import { ethereum, InstallError } from "@cosmostation/extension-client";
try {
  const provider = await ethereum();

  const handler = provider.on("accountsChanged", (accounts) => {
    if(accounts.length === 0 ) {
      console.log(provider.request({'eth_requestAccounts'}))
    } else {
      console.log(accounts)
    }
  });

  provider.off(handler)
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
  // exception
}
```

## chainChanged

```typescript
import { ethers } from "ethers";
import { ethereum, InstallError } from "@cosmostation/extension-client";
try {
  const provider = await ethereum();

  const handler = provider.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  provider.off(handler);
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }
  // exception
}
```
