---
sidebar_position: 2
---

# Connect And Get Accounts

connect and get Account via Cosmostation Extension

```javascript
const response = await window.cosmostation.sui.connect();

// or

const response = await window.cosmostation.sui.connect([
  "viewAccount",
  "suggestTransactions",
]);
```

#### Response

```typescript title=Model
export type SuiConnectResponse = boolean;
```

```json title=Example
true
```

## Get Accounts

### Vanilla Code

```javascript
const response = await window.cosmostation.sui.connect();

const accounts = await window.cosmostation.sui.getAccounts();

const publicKey = await window.cosmostation.sui.getPublicKey();
```

#### Response

```typescript title=Model
export type SuiAccountResponse = string[];
```

```json title=Example
["0xd2d030d4339531d9cb442caf4be7bb954fddedb4"]
```
