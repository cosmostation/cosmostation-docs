---
sidebar_position: 13
---

# Use Cosmostation with Keplr Interface

Cosmostation is providing Keplr's interface. The purpose is to make it easier for the developers to integrate Cosmostation to dApps that have Keplr integrated already.

Supported functions/variables are as belows:

- defaultOptions
- enable
- getKey
- experimentalSuggestChain
- getOfflineSigner
- getOfflineSignerAuto
- getOfflineSignerOnlyAmino
- sendTx
- signAmino
- signDirect
- signArbitrary
- verifyArbitrary

In case of an error, use the Cosmostation interface.

You need to use methods provided by Cosmostation for the event handling and defaultOptions change.
Here's the guide:

## Guide

Use `window.cosmostation.providers.keplr` instead of `window.keplr`.

```javascript
window.onload = async () => {
  if (!window.cosmostation) {
    alert("Please install cosmostation extension");
  } else {
    const chainId = "cosmoshub-4";

    await window.cosmostation.providers.keplr.enable(chainId);

    const offlineSigner =
      window.cosmostation.providers.keplr.getOfflineSigner(chainId);

    const accounts = await offlineSigner.getAccounts();
  }
};
```

```javascript
async getKeplr(): Promise<Keplr | undefined> {
    if (window.cosmostation) {
        return window.cosmostation.providers.keplr;
    }

    if (document.readyState === "complete") {
        return window.cosmostation.providers.keplr;
    }

    return new Promise((resolve) => {
        const documentStateChange = (event: Event) => {
            if (
                event.target &&
                (event.target as Document).readyState === "complete"
            ) {
                resolve(window.cosmostation.providers.keplr);
                document.removeEventListener("readystatechange", documentStateChange);
            }
        };

        document.addEventListener("readystatechange", documentStateChange);
    });
}
```

## defaultOptions

```javascript
window.cosmostation.providers.keplr.defaultOptions = {
  sign: {
    preferNoSetFee: true,
    preferNoSetMemo: true,
  },
};
```

## Event

```javascript
window.cosmostation.cosmos.on("accountChanged", () => console.log("changed"));
```
