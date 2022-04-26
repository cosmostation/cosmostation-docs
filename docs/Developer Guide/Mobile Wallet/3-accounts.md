---
sidebar_position: 3
---

# Accounts

Get Account from DeepLink & QRCode.
> Before Select Account, Check Not supported chain or Empty accounts.
>
> Response contain selected accounts 

## Get Accounts

```js
export function getAccountRequest(chainIds) {
  return {
    id: payloadId(),
    jsonrpc: '2.0',
    method: 'cosmostation_wc_accounts_v1',
    params: chainIds,
  };
}
```

```js title=Example
const request = getAccountRequest([CHAIN_ID, NOT_SUPPORTED_CHAIN_ID]);
connector.sendCustomRequest(request)
  .then((accounts) => {
    setAccounts(accounts);
    console.log(accounts.length == 1);
  }).catch((error) => {
    console.error(error);
  });
```