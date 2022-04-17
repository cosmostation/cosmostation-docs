---
sidebar_position: 4
---

# Sign Amino

Sign Amino:

```js title="message"
export function getSignAminoRequest(chainId, signer, signDoc) {
  return {
    id: payloadId(),
    jsonrpc: '2.0',
    method: 'cosmostation_wc_sign_amino_v1',
    params: [chainId, signer, signDoc],
  };
}
```

```js title="example"
const signDoc = makeAminoSignDoc([message], fee, CHAIN_ID, '', accountNumber, sequence);

const request = cosmostationWalletConnect.getSignAminoRequest(
      CHAIN_ID,
      address,
      signDoc,
    );

connector.sendCustomRequest(request)
  .then((response) => {
    console.log(response);
    const signed = _.get(response, '0.signed');
    const signature = _.get(response, '0.signature');
    return broadcastTx(signed, signature);
  }).then((result) => {
    const code = _.get(result, 'code');
    if (code === 0) {
      const txHash = _.get(result, 'txhash');
      setLastTxHash(txHash);
    } else {
      const rawLog = _.get(result, 'raw_log');
      console.error(rawLog);
      alert(rawLog);
      setLastTxHash();
    }
  })
})
```