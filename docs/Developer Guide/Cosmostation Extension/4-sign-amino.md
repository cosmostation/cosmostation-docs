---
sidebar_position: 4
---

# Sign Amino

Sign messages:

```js title="Sign amino example"
const extensionSend = useCallback(async () => {
  if (extensionAddress) {
    const address = extensionAddress;
    const url = `${LCD_ENDPOINT}/cosmos/auth/v1beta1/accounts/${address}`;
    axios.get(url).then((response) => {
      console.log('response:', response);
      const accountNumber = _.get(response, 'data.account.account_number');
      const sequence = _.get(response, 'data.account.sequence');
      console.log('account number:', accountNumber, 'sequence:', sequence);

      const message = makeAminoSendMessage(address, TO_ADDRESS, '100');
      const fee = {
        amount: [
          { denom: DENOM, amount: '0' }
        ],
        gas: '80000'
      };
      console.log('message:', message, 'fee:', fee);
      const signDoc = makeAminoSignDoc([message], fee, CHAIN_ID, '', accountNumber, sequence);

      extensionConnector.signAmino(CHAIN_NAME, signDoc)
        .then((response) => {
          console.log(response);
          const signed = response.signed_doc;
          const signature = response.signature;
          const pub_key = response.pub_key
          return broadcastTx(signed, { signature, pub_key });
        }).then((result) => {
          const code = _.get(result, 'code');
          if (code === 0) {
            const txHash = _.get(result, 'txhash');
            setExtensionLastTxHash(txHash);
          } else {
            const rawLog = _.get(result, 'raw_log');
            console.error(rawLog);
            alert(rawLog);
            setExtensionLastTxHash();
          }
        })
    })
  }
}, [extensionAddress, extensionConnector]);
```