---
sidebar_position: 4
---

# Event

Account change event

## onAccountChanged

```typescript
provider.onAccountChanged(() => console.log('changed'));
```

## offAccountChanged

```typescript
const event = provider.onAccountChanged(() => console.log('changed'));
provider.offAccountChanged(event);
```