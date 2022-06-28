---
sidebar_position: 5
---

# Event

Account change event

## onAccountChanged

### Code using @cosmostation/extension-client

```typescript
provider.onAccountChanged(() => console.log("changed"));
```

### Vanilla Code

```javascript
window.cosmostation.tendermint.on("accountChanged", () =>
  console.log("changed")
);
```

## offAccountChanged

### Code using @cosmostation/extension-client

```typescript
const event = provider.onAccountChanged(() => console.log("changed"));
provider.offAccountChanged(event);
```

### Vanilla Code

```javascript
const event = window.cosmostation.tendermint.on("accountChanged", () =>
  console.log("changed")
);
window.cosmostation.tendermint.off(event);
```
