# CLI Introduction

## Introduction

`mintstaiond` is a command line client for the Mintstation. Mintstation users can use `mintstationd` to send transactions to the Mintstation network and query the blockchain data.

See [here](cli/setup.md) for instructions on installing `mintstationd`.

### Working Directory <a href="#working-directory" id="working-directory"></a>

The default working directory for the `mintstationd` is `$HOME/.mintstationd`, which is mainly used to store configuration files and blockchain data. The Mintstation `key` data is saved in the working directory of `mintstationd`. You can also specify the `mintstationd` working directory by using the `--home` flag when executing `mintstationd`.

### Connecting to a Full-Node

By default, `mintstationd` uses `tcp://localhost:26657` as the RPC address to connect to the Mintstation network. This default configuration assumes that the machine executing `mintstationd` is running as a full-node.

The RPC address can be specified to connect to any full-node with an exposed RPC port by adding the `--node` flag when executing `mintstationd`
