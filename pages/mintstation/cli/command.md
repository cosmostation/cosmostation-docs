---
cover: ../.gitbook/assets/Discord Invite (1) (50).png
coverY: 262
---

# Useful CLI Commands

Get standard debug info from the `mint` daemon:

```bash
mintstationd status
```

Check if your node is catching up:

```bash
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```

Get your node ID:

```bash
mintstationd tendermint show-node-id
```

Check if you are jailed or tombstoned:

```bash
mintstationd query slashing signing-info $(mintstationd tendermint show-validator)
```

Set the default chain for commands to use:

```bash
mintstationd config chain-id mintstation-1
```

Get your `valoper` address:

```bash
mintstationd keys show <your-key-name> -a --bech val
```

See keys on the current box:

```bash
mintstationd keys list
```

Import a key from a mnemonic:

```bash
mintstationd keys add <new-key-name> --recover
```

Export a private key (warning: don't do this unless you know what you're doing!)

```bash
mintstationd keys export <your-key-name> --unsafe --unarmored-hex
```

Withdraw rewards (including validator commission), where `mintvaloper1...` is the validator address:

```bash
mintstationd tx distribution withdraw-rewards <mintvaloper1...> --from <your-key>  --commission
```

Stake:

```bash
mintstationd tx staking delegate <mintvaloper1...> <AMOUNT>umint --from <your-key>
```

Find out what the JSON for a command would be using `--generate-only`:

```bash
mintstationd tx bank send $(mintstationd keys show <your-key-name> -a) <recipient addr> <AMOUNT>umint --generate-only
```

Query the results of a gov vote that has ended, from a remote RPC (NB - you have to specify a height before the vote ended):

```bash
 mintstationd q gov votes 1 --height <height-before-vote-ended> --node https://rpc-archive.mintnetwork.io:443
```

Transfer mint to another chain (osmosis) with IBC

```sh
mintstationd tx ibc-transfer transfer transfer channel-0 <osmo1...> 1000000umint --from <mint1...> --node https://rpc-archive.mintnetwork.io:443  --packet-timeout-height 0-0
```

Query the validator set (and jailed status) via CLI:

```bash
mintstationd query staking validators --limit 1000 -o json | jq -r '.validators[] | [.operator_address, (.tokens|tonumber / pow(10; 6)), .description.moniker, .jail, .status] | @csv' | column -t -s"," | sort -k2 -n -r | nl
```

Get contract state:

```bash
mintstationd q wasm contract-state all <contract-address>
```
