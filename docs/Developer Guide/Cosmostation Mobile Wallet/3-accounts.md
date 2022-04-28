---
sidebar_position: 3
---

# Accounts

Use account on Cosmostation Mobile Wallet via WalletConnect.

## Get Accounts
> Select an account after checking unsupported chains or empty accounts.
>
> The response only contains selected account.

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