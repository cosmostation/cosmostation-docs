---
sidebar_position: 4
---

# Sign Transcations
Sign transcation using Cosmostation Mobile Wallet via WalletConnect.

```js
export function getSignTxRequest(chainId, signer, signDoc) {
  return {
    id: payloadId(),
    jsonrpc: '2.0',
    method: 'cosmostation_wc_sign_tx_v1',
    params: [chainId, signer, signDoc],
  };
}
```

```js title=Example
const signDoc = makeAminoSignDoc([message], fee, CHAIN_ID, '', accountNumber, sequence);

const request = getSignAminoRequest(CHAIN_ID, address, signDoc);

connector.sendCustomRequest(request)
  .then((response) => {
    const signed = _.get(response, '0.signed');
    const signature = _.get(response, '0.signature');
    return broadcastTx(signed, signature);
  }).then((result) => {
    const code = _.get(result, 'code');
    if (code === 0) {
      const txHash = _.get(result, 'txhash');
      console.log(txHash);
    } else {
      const rawLog = _.get(result, 'raw_log');
      console.error(rawLog);
    }
  })
```