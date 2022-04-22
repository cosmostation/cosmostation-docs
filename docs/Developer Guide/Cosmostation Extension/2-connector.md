---
sidebar_position: 2
---

# Connector

Cosmoostation extension support various chains.

## Tendermint

Import tendermint module:

```js
import { tendermint } from '@cosmostation/extension-client';
var connector = await tendermint();
```

```js title="connect-example"
import { tendermint } from '@cosmostation/extension-client';
const [extensionConnector, setExtensionConnector] = useState(false);
const [extensionConnected, setExtensionConnected] = useState(false);
const extensionConnect = useCallback(async () => {
  try {
    setExtensionConnector(await tendermint())
    setExtensionConnected(true);
  } catch {
    setExtensionConnected(false);
  }
}, []);
```