---
sidebar_position: 3
---

# Get Accounts

Get Accounts:

```js title="message"
export function getKeyRequest(chainIds) {
  return {
    id: payloadId(),
    jsonrpc: '2.0',
    method: 'cosmostation_wc_keys_v1',
    params: chainIds,
  };
}
```

```js title="example"
const getAccounts = useCallback(() => {
    if (connector) {
      const request = cosmostationWalletConnect.getKeyRequest([CHAIN_ID]);
      connector.sendCustomRequest(request)
        .then((accounts) => {
          const account = _.get(accounts, 0);
          setAccount(account);
        }).catch((error) => {
          console.error(error);
          alert(error.message);
          setAccount();
        });
    }
  }, [connector]);
```