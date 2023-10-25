# Deploy a Contract

## PreRequisite

Make sure you follow the [create a contract](create.md) guide first for your project. Once you have a contract compiled in the artifacts/\*.wasm directory, you are ready for this guide.

## Upload

You need to upload the contract via the CLI to chain. To do this, perform the following

```bash
TXFLAGS="--chain-id=mintstation-1 --gas-prices=0.025umint --gas=auto --gas-adjustment 1.3"

mintstationd tx wasm store artifacts/CONRTACT_NAME.wasm \
    --from <KEY> $TXFLAGS -y --broadcast-mode=block
```

This will then return a transaction hash. With this data, you need to query it to get the code id of the contract on chain

```bash
mintstationd q tx 38330E909CD219B80927009DA37FD69D334D19B2AD4EC47456A24E85034F0085 --output=json
```

This will return the data about the transaction, and give us the code id of our contract

```json
{
  "height": "294601",
  "txhash": "38330E909CD219B80927009DA37FD69D334D19B2AD4EC47456A24E85034F0085",
  "codespace": "",
  "code": 0,
  "data": "0A460A1E2F636F736D7761736D2E7761736D2E76312E4D736753746F7265436F64651224080D12203318E74E8C68DBCC6E0317C42B8DB0AB642B61AEFAD487DEDB6ECB54FFED4D72",
  "raw_log": "[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmwasm.wasm.v1.MsgStoreCode\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"mint1hj5fveer5cjtn4wd6wstzugjfdxzl0xps73ftl\"}]},{\"type\":\"store_code\",\"attributes\":[{\"key\":\"code_checksum\",\"value\":\"3318e74e8c68dbcc6e0317c42b8db0ab642b61aefad487dedb6ecb54ffed4d72\"},{\"key\":\"code_id\",\"value\":\"13\"}]}]}]",
  "logs": [
    {
      "msg_index": 0,
      "log": "",
      "events": [
        {
          "type": "message",
          "attributes": [
            {
              "key": "action",
              "value": "/cosmwasm.wasm.v1.MsgStoreCode"
            },
            {
              "key": "module",
              "value": "wasm"
            },
            {
              "key": "sender",
              "value": "mint1hj5fveer5cjtn4wd6wstzugjfdxzl0xps73ftl"
            }
          ]
        },
        {
          "type": "store_code",
          "attributes": [
            {
              "key": "code_checksum",
              "value": "3318e74e8c68dbcc6e0317c42b8db0ab642b61aefad487dedb6ecb54ffed4d72"
            },
            {
              "key": "code_id",
              "value": "13"
            }
          ]
        }
      ]
    }
  }]
}
```

We can see both raw_log and also logs\[0].events\[1].store_code shows the code_id being 13. If you wish the automate this return code in bash to a variable, you can&#x20;

```bash
# ensure jq is installed
UPLOAD_TX_HASH=38330E909CD219B80927009DA37FD69D334D19B2AD4EC47456A24E85034F0085
CODE_ID=$(mintstationd q tx $UPLOAD_TX_HASH --output json | jq -r '.logs[0].events[] | select(.type == "store_code").attributes[] | select(.key == "code_id").value') && echo "Code Id: $CODE_ID"
```

## Instantiate

With the code now being up on chain, we can now run logic to setup our own copy of the contract which we control. This will then give us a unique contract address for others to interact with in accordance with the contract logic. This example is from the [cosmwasm/cw-template](https://github.com/CosmWasm/cw-template).

Ensure you change CODE_ID to match your code id from the store code

```bash
FLAGS="--chain-id=mintstation-1 --gas-prices=0.025umint --gas=auto --gas-adjustment 1.3"

#Example1
CODE_ID=1
mintstationd tx wasm instantiate "$CODE_ID" '{"count":0}' --label "contract" $FLAGS -y --admin <your-address-here>

#cw20
CODE_ID=2
INIT='{"name":"CW20","symbol":"TOKEN","decimals":2,"initial_balances":[{"amount":"1000000","address":<address>}]}'
mintstationd tx wasm instantiate "$CODE_ID" "$INIT" --from <account> --label "cw-token"  $FLAGS -y --admin <your-address-here>
```
