# Setup CLI

### Build

Build Requirements

```
Go 1.20.+
```

Clone source from repository:

```bash
git clone https://github.com/cosmostation/mintstation
cd mintstation
git checkout {SET_CURRENT_VERSION}
```

Once you're on the correct tag, you can build:

```bash
# from mintstation dir
make install
```

To confirm that the installation has succeeded, you can run:

```bash
mintstationd version

#v0.0.1
```

## Configure

Set the `chain-id` & `node`,

```bash
#Update config.toml
mintstationd config chain-id mintstation-1
mintstationd config node {NODE_RPC_ENDPOINT:PORT}
```
