---
sidebar_position: 9
---

# Disconnect

Disconnect from Dapp

### Code using @cosmostation/extension-client

```javascript
const response = await provider.disconnect();
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_disconnect",
});
```

#### Response

```typescript title="Model"
type DisconnectResponse = null;
```

```json title="Example"
null
```
