## Setup signle local network

To set up a single local network easily, you can directly run the script below, and it will start working immediately:

To get up and running with the mintstationd binary, please follow the instructions [here](/mintstation/cli/setup.md).

```bash
APP_HOME="$HOME/.mintstationd"
RPC="http://localhost:26657"
CHAIN_ID="localnet-1"
MONIKER="Moniker"

mintstationd init ${MONIKER} --chain-id ${CHAIN_ID} --home ${APP_HOME}

sed -i -r 's/minimum-gas-prices = ""/minimum-gas-prices = "0.0001umint"/' ${APP_HOME}/config/app.toml

sed -i -e 's/\"stake\"/\"umint\"/g' ${APP_HOME}/config/genesis.json

mintstationd start --home ${APP_HOME}
```
