---
sidebar_position: 4
---

# Accounts

Using Cosmostation Extension accounts.

## Get Accounts
```typescript
const account = await provider.getAccount({ chainName: 'cosmos' });
```


> ### If connected successfully, it will look like below.
> ![Provider](/img/developer/extension/2-provider-connected.png)


### Response

```typescript title="Model"
type AccountResponse = {
  name: string;
  address: string;
  publicKey: Uint8Array;
};
```
```json title="Example"
{
  "address": "cosmos1wgeoiheoighwoighwioeghoweghoiweghiow",
  "publicKey": [3, 77, 9, 189, 251, 249, 150, 235, 192, 56, 51, 98, 56, 242, 12, 102, 144, 211, 89, 42, 187, 170]
}
```


## Request Account (Popup)

```typescript
const account = await provider.requestAccount({ chainName: 'cosmos' });
```

### Response
```typescript title=Model
type RequestAccountResponse = {
  name: string;
  address: string;
  publicKey: Uint8Array;
};
```
```json title=Example
{
  "address": "cosmos1wgeoiheoighwoighwioeghoweghoiweghiow",
  "publicKey": [3, 77, 9, 189, 251, 249, 150, 235, 192, 56, 51, 98, 56, 242, 12, 102, 144, 211, 89, 42, 187, 170]
}
```
