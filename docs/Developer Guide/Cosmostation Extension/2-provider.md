---
sidebar_position: 2
---

# Provider

Cosmostation extension support various chains.

## Tendermint

```typescript
import { tendermint, InstallError } from '@cosmostation/extension-client';

try {
  const provider = await tendermint();
} catch (e) {
  if (e instanceof InstallError) {
    console.log('not installed');
  }
}
```