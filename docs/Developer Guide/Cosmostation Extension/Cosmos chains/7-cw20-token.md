---
sidebar_position: 7
---

# CW20 token

`@cosmostation/extension-client >= 0.1.7`

CW20 token via Cosmostation Extension

## Add CW20 Tokens

### Code using @cosmostation/extension-client

```typescript
// ...

const response = await provider.addCW20Tokens("juno", [
  {
    contractAddress:
      "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
    imageURL:
      "https://pbs.twimg.com/profile_images/1465777324859826197/RUXx0equ_400x400.jpg", // optional
    coinGeckoId: "neta", // optional
  },
  {
    contractAddress:
      "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
  },
]);
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_addTokensCW20",
  params: {
    chainName: "juno",
    tokens: [
      {
        contractAddress:
          "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        imageURL:
          "https://pbs.twimg.com/profile_images/1465777324859826197/RUXx0equ_400x400.jpg", // optional
        coinGeckoId: "neta", // optional
      },
      {
        contractAddress:
          "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
      },
    ],
  },
});
```

#### Response

```typescript title=Model
export type AddCW20TokenResponse = null;
```

```json title=Example
null
```

## Get CW20 Token Balance

### Code using @cosmostation/extension-client

```typescript
// ...

const response = await provider.getCW20TokenBalance(
  "juno",
  "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr", // contract address
  "juno14xgdfdnpjtulj6p7rkc75ekxqjq8hc5cg5evx3" // address
);
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_getBalanceCW20",
  params: {
    chainName: "juno",
    contractAddress:
      "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
    address: "juno14xgdfdnpjtulj6p7rkc75ekxqjq8hc5cg5evx3",
  },
});
```

#### Response

```typescript title=Model
export type getCW20TokenBalanceResponse = string;
```

```json title=Example
"1331775394"
```

## Get CW20 Token Info

### Code using @cosmostation/extension-client

```typescript
// ...

const response = await provider.getCW20TokenInfo(
  "juno",
  "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr" // contract address
);
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_getTokenInfoCW20",
  params: {
    chainName: "juno",
    contractAddress:
      "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
  },
});
```

#### Response

```typescript title=Model
export type getCW20TokenInfoResponse = {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: string;
};
```

```json title=Example
{
  "name": "NETA",
  "symbol": "NETA",
  "decimals": 6,
  "total_supply": "31886600000"
}
```
