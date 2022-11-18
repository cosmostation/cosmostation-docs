---
sidebar_position: 8
---

# Auto Sign

If you need automatic signatures for a certain duration

## Set AutoSign

### Code using @cosmostation/extension-client

```typescript
try {
  // ...
  const response = await provider.autoSign.set(
    "cosmos",
    1000 // seconds, 0~3600
  );
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }

  // exception
}
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_setAutoSign",
  params: { chainName: "cosmos", duration: 1000 },
});
```

#### Response

```typescript title=Model
export type SetAutoSignResponse = null;
```

```json title=Example
null
```

## Get AutoSign

for getting auto sign's end time

### Code using @cosmostation/extension-client

```typescript
try {
  // ...
  const response = await provider.autoSign.get("cosmos");

  const endDate = response ? new Date(response) : null;
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }

  // exception
}
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_getAutoSign",
  params: { chainName: "cosmos" },
});
```

#### Response

```typescript title=Model
export type GetAutoSignResponse = number | null;
```

```json title=Example
1659335896648
```

## Delete AutoSign

### Code using @cosmostation/extension-client

```typescript
try {
  // ...
  const response = await provider.autoSign.delete("cosmos");
} catch (e) {
  if (e instanceof InstallError) {
    console.log("not installed");
  }

  if (e.code === 4001) {
    console.log("user rejected request");
  }

  // exception
}
```

### Vanilla Code

```javascript
const response = await window.cosmostation.cosmos.request({
  method: "cos_deleteAutoSign",
  params: { chainName: "cosmos" },
});
```

#### Response

```typescript title=Model
export type DeleteAutoSignResponse = null;
```

```json title=Example
null
```
