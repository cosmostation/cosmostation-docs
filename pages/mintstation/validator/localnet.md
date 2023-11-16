## Setup Local Network

To set up a single local network easily, you can directly run the script below, and it will start working immediately:

To get up and running with the mintstationd binary, please follow the instructions [here](/mintstation/cli/setup.md).

```bash
APP_HOME="$HOME/.mintstation"
RPC="http://localhost:26657"
CHAIN_ID="localnet-1"
MONIKER="Moniker"

mintstationd init ${MONIKER} --chain-id ${CHAIN_ID} --home ${APP_HOME}

sed -i -r 's/minimum-gas-prices = "0stake"/minimum-gas-prices = "0.0001umint"/' ${APP_HOME}/config/app.toml

sed -i -e 's/\"stake\"/\"umint\"/g' ${APP_HOME}/config/genesis.json

mintstationd keys add validator --keyring-backend test

MY_VALIDATOR_ADDRESS=$(mintstationd keys show validator --keyring-backend test -a)

mintstationd add-genesis-account $MY_VALIDATOR_ADDRESS 10000000000umint

mintstationd gentx validator 10000000umint --chain-id localnet-1 --keyring-backend test

mintstationd collect-gentxs

mintstationd start --home ${APP_HOME}
```
