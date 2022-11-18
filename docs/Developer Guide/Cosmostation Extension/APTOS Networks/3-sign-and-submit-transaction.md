---
sidebar_position: 3
---

# Sign And Submit Transaction

Sign And Submit transcation via Cosmostation Extension

## SignAndSubmitTransaction

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();

  // e.g. send payload
  const payload = {
    arguments: [
      "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
      "100000000",
    ],
    function: "0x1::aptos_account::transfer",
    type: "entry_function_payload",
    type_arguments: [],
  };

  const pendingTransaction = await provider.signAndSubmitTransaction(payload);
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
// e.g. send payload
const payload = {
  arguments: [
    "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
    "100000000",
  ],
  function: "0x1::aptos_account::transfer",
  type: "entry_function_payload",
  type_arguments: [],
};

try {
  const provider = aptos();

  const pendingTransaction = await provider.signAndSubmitTransaction(payload);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

#### request

```typescript title=Model
export type AptosSignPayload<T = unknown> = {
  function: string;
  type: string;
  type_arguments: string[];
  arguments: T[];
};
```

#### Response

```typescript title=Model
export type AptosSignAndSubmitTransactionResponse = {
  hash: string;
  sender: string;
  sequence_number: string;
  max_gas_amount: string;
  gas_unit_price: string;
  expiration_timestamp_secs: string;
  payload: AptosSignPayload;
  signature?: {
    type: string;
    public_key: string;
    signature: string;
  };
};
```

```json title=Example
{
  "hash": "0x2ca5cddb53929e9a6f348389fae9a5f8f4fe3906a04c8d8b2ee075d7bc0b3540",
  "sender": "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
  "sequence_number": "15",
  "max_gas_amount": "1016",
  "gas_unit_price": "100",
  "expiration_timestamp_secs": "1668137878",
  "payload": {
    "function": "0x1::coin::transfer",
    "type_arguments": ["0x1::aptos_coin::AptosCoin"],
    "arguments": [
      "0x84b0d6b75cd160f1e46a7d18b567e79d79898e1a6487795a83e60d29291d94d6",
      "1000000"
    ],
    "type": "entry_function_payload"
  },
  "signature": {
    "public_key": "0x503603cb3ea1801805b952d9d4c6a7302dddfa78cc15042e78132ee907e6b48f",
    "signature": "0xebacde33a6e22887a45f085086ec86265cb3d61f6f2baecd5aec04a4fcca17b82b7a9c2ea337677a7e0d01b622a1e1b11cc487e2104d588e7f72540c1bcc990c",
    "type": "ed25519_signature"
  }
}
```

## SignTransaction

### Code using @cosmostation/extension-client

```typescript
import { aptos, InstallError } from "@cosmostation/extension-client";

try {
  const provider = await aptos();

  const signature = await provider.signTransaction(payload);
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
const cosmostation = provider();

// e.g. send payload
const payload = {
  arguments: [
    "0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644",
    "100000000",
  ],
  function: "0x1::aptos_account::transfer",
  type: "entry_function_payload",
  type_arguments: [],
};

try {
  const provider = aptos();

  const signature = await provider.signTransaction(payload);
} catch (e) {
  if (e.code === 4001) {
    console.log("user rejected request");
  }
}
```

#### request

```typescript title=Model
export type AptosSignPayload<T = unknown> = {
  function: string;
  type: string;
  type_arguments: string[];
  arguments: T[];
};
```

#### Response

```typescript title=Model
export type AptosSignTransactionResponse = string;
```

```json title=Example
"0x9d8a438fe580db4f7b9e108a4bce46ad6647905495903f295d06458625913644100000000000000002000000000000000000000000000000000000000000000000000000000000000104636f696e087472616e73666572010700000000000000000000000000000000000000000000000000000000000000010a6170746f735f636f696e094170746f73436f696e00022084b0d6b75cd160f1e46a7d18b567e79d79898e1a6487795a83e60d29291d94d60840420f0000000000f8030000000000006400000000000000ccc36d6300000000010020503603cb3ea1801805b952d9d4c6a7302dddfa78cc15042e78132ee907e6b48f40a58ef2b76eec70a2a538cd7e2faa97def87576ba766feeeb4cd884e9d848fad93cd2c262235b00915be049edcba0046aed6bbd6823a76051fb1bd83791949508"
```
