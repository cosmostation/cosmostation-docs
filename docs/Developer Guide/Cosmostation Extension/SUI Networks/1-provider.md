---
sidebar_position: 1
---

# Provider

Cosmostation extension support various chains.

```javascript
const sui = () => {
  if ("cosmostation" in window) {
    return window.cosmostation.sui;
  } else {
    window.open("https://cosmostation.io/wallet/#extension");
    /**
     * or window.open("https://chrome.google.com/webstore/detail/cosmostation/fpkhgmpbidmiogeglndfbkegfdlnajnf");
     * */
  }
};

const provider = sui();
```
