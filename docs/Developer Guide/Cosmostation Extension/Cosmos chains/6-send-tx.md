---
sidebar_position: 6
---

# Send Transcation

Send transcation via Cosmostation Extension

### Code using @cosmostation/extension-client

```typescript
import { SEND_TRANSACTION_MODE } from "@cosmostation/extension-client/cosmos";

// ...

const response = await provider.sendTransaction(
  "cosmos",
  "abc=", // base64 string or Uint8Array
  SEND_TRANSACTION_MODE.ASYNC /* SEND_TRANSACTION_MODE or one of [0, 1, 2, 3] */
);
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_sendTransaction",
  params: { chainName: "cosmos", txBytes: "abc=", mode: 0 },
});
```

#### Response

```typescript title=Model
export type SendTransactionResponse = {
  tx_response: SendTransaction;
};

export type SendTransaction = {
  code: number;
  txhash: string;
  raw_log?: unknown;
  codespace?: unknown;
  tx?: unknown;
  log?: unknown;
  info?: unknown;
  height?: unknown;
  gas_wanted?: unknown;
  gas_used?: unknown;
  events?: unknown;
  data?: unknown;
  timestamp?: unknown;
};

export const SEND_TRANSACTION_MODE = {
  UNSPECIFIED: 0,
  BLOCK: 1,
  SYNC: 2,
  ASYNC: 3,
};
```

```json title=Example
{
  "tx_response": {
    "code": 0,
    "codespace": "",
    "data": "",
    "events": [],
    "gas_used": "0",
    "gas_wanted": "0",
    "height": "0",
    "info": "",
    "logs": [],
    "raw_log": "[]",
    "timestamp": "",
    "tx": null,
    "txhash": "4CC689A1E8CF89E1CF1E98D523BC171FEC749DCF8CFED296FA441AF1E0C47C4C"
  }
}
```
