# Setup Mintstation

### Build

Clone source from repository:

```bash
git clone https://github.com/cosmostation/mintstation
cd mintstation
git checkout v0.0.1 #SET_CURRENT_VERSION
```

Once you're on the correct tag, you can build:

```bash
# from mint dir
make install
```

To confirm that the installation has succeeded, you can run:

```bash
mintstationd version

# v0.0.1
```

## Configure

Set the `chain-id` & `node`

```bash
mintstationd config chain-id mintstation-1
mintstationd config node {node_rpc_endpoint}
```
