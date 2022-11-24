---
sidebar_position: 12
---

# Integrate cosmjs

Integrate cosmjs.

## Add package

```bash title="yarn"
yarn add @cosmostation/cosmos-client
```

```bash title="npm"
npm install @cosmostation/cosmos-client
```

## Offline Signer

```js
import { getOfflineSigner } from "@cosmostation/cosmos-client";

const offlineSigner = await getOfflineSigner(CHAIN_ID);
```

```js title=Example
import { getOfflineSigner } from "@cosmostation/cosmos-client";
import { GasPrice, calculateFee } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const offlineSigner = await getOfflineSigner(CHAIN_ID);
const rpcEndpoint = RPC_END_POINT;
const client = await SigningCosmWasmClient.connectWithSigner(
  rpcEndpoint,
  offlineSigner
);

//getAccounts
const accounts = await offlineSigner.getAccounts();

//execute
const gasPrice = GasPrice.fromString("0.01denom");
const fees = {
  upload: calculateFee(1500000, gasPrice),
  init: calculateFee(500000, gasPrice),
  exec: calculateFee(500000, gasPrice),
};

const result = await client.execute(
  accounts[0].address,
  RECEIPT_ADDRESS,
  MESSAGE,
  fees.exec
);
```
