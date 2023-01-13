---
sidebar_position: 4
---

# Sign And Execute Transaction

```javascript
const payload = {
  kind: "moveCall",
  data: {
    packageObjectId: "0x2",
    module: "devnet_nft",
    function: "mint",
    typeArguments: [],
    arguments: [
      "Cosmostation NFT",
      "An NFT created by Cosmostation Wallet",
      "https://avatars.githubusercontent.com/u/49175386?s=200&v=4",
    ],
    gasBudget: 10000,
  },
};

await window.cosmostation.sui.connect();

const response = await window.cosmostation.sui.signAndExecuteTransaction(
  payload
);
```

#### request

- [UnserializedSignableTransaction](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/signers/txn-data-serializers/txn-data-serializer.ts#L106)

```typescript title=Model
export type UnserializedSignableTransaction =
  | {
      kind: "moveCall";
      data: MoveCallTransaction;
    }
  | {
      kind: "transferSui";
      data: TransferSuiTransaction;
    }
  | {
      kind: "transferObject";
      data: TransferObjectTransaction;
    }
  | {
      kind: "mergeCoin";
      data: MergeCoinTransaction;
    }
  | {
      kind: "splitCoin";
      data: SplitCoinTransaction;
    }
  | {
      kind: "pay";
      data: PayTransaction;
    }
  | {
      kind: "paySui";
      data: PaySuiTransaction;
    }
  | {
      kind: "payAllSui";
      data: PayAllSuiTransaction;
    }
  | {
      kind: "publish";
      data: PublishTransaction;
    };
```

#### Response

- [CertifiedTransaction](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/types/transactions.ts#L128)
- [TransactionEffects](https://github.com/MystenLabs/sui/blob/main/sdk/typescript/src/types/transactions.ts#L162)

```typescript title=Model
export type SuiTransactionResponse = {
  certificate: CertifiedTransaction;
  effects: TransactionEffects;
};
```

```json title=Example
{
  "certificate": {
    "transactionDigest": "QTWZUMmBzPReVUPjxPRPs271Zve7C4rtCRHm8Cisz4x",
    "data": {
      "transactions": [
        {
          "Call": {
            "package": {
              "objectId": "0x0000000000000000000000000000000000000002",
              "version": 1,
              "digest": "BN1R9u+4+jOoGiGagW50eT+EE+JxtYLaveBPxHhgsiE="
            },
            "module": "devnet_nft",
            "function": "mint",
            "arguments": [
              "Cosmostation NFT",
              "An NFT created by Cosmostation Wallet",
              "https://avatars.githubusercontent.com/u/49175386?s=200&v=4"
            ]
          }
        }
      ],
      "sender": "0xddee25bee35fa634a1d486d16281f333370ef3f2",
      "gasPayment": {
        "objectId": "0x3be2f11263e4c6d77356ba04f053f38ae917bd23",
        "version": 99,
        "digest": "aw8yjNgqA/siJay1eJWv/axflLvGwSM+RbXOilKWAlo="
      },
      "gasPrice": 1,
      "gasBudget": 10000
    },
    "txSignature": "ALSjaMJTiA34zu/d6nnfBH7SxjQvk988NYcNeW8cHJf0zLvriSbIf3/6q7FDtg/5jCNOBknZ38Hmgg0MAhRs7wdWEU2i63wnssWTOQJmMjz5Wq+PhqtBW+GrkSSWOnRKAA==",
    "authSignInfo": {
      "epoch": 0,
      "signature": "qhUPMYuuaMqemq+l5a/rDm7VlFmkzXvxtf1gNdwT1xTuNPGYRE0DYBJ+WNnB/D30",
      "signers_map": [
        58, 48, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 0, 2, 0, 3, 0
      ]
    }
  },
  "effects": {
    "status": { "status": "success" },
    "gasUsed": {
      "computationCost": 464,
      "storageCost": 40,
      "storageRebate": 16
    },
    "transactionDigest": "QTWZUMmBzPReVUPjxPRPs271Zve7C4rtCRHm8Cisz4x",
    "created": [
      {
        "owner": {
          "AddressOwner": "0xddee25bee35fa634a1d486d16281f333370ef3f2"
        },
        "reference": {
          "objectId": "0x1eaadc7b76011f5657821a6aa92eae6098689c9a",
          "version": 100,
          "digest": "jJ99SfS/MZIqudWmXmdXU8GChiXFsej27kWDz6FCNeQ="
        }
      }
    ],
    "mutated": [
      {
        "owner": {
          "AddressOwner": "0xddee25bee35fa634a1d486d16281f333370ef3f2"
        },
        "reference": {
          "objectId": "0x3be2f11263e4c6d77356ba04f053f38ae917bd23",
          "version": 100,
          "digest": "wgC6a5w4Xqg4D81bOvBiRjkh0m91srqzZP0kLTkCU6Y="
        }
      }
    ],
    "gasObject": {
      "owner": { "AddressOwner": "0xddee25bee35fa634a1d486d16281f333370ef3f2" },
      "reference": {
        "objectId": "0x3be2f11263e4c6d77356ba04f053f38ae917bd23",
        "version": 100,
        "digest": "wgC6a5w4Xqg4D81bOvBiRjkh0m91srqzZP0kLTkCU6Y="
      }
    },
    "events": [
      {
        "coinBalanceChange": {
          "packageId": "0x0000000000000000000000000000000000000002",
          "transactionModule": "gas",
          "sender": "0xddee25bee35fa634a1d486d16281f333370ef3f2",
          "changeType": "Gas",
          "owner": {
            "AddressOwner": "0xddee25bee35fa634a1d486d16281f333370ef3f2"
          },
          "coinType": "0x2::sui::SUI",
          "coinObjectId": "0x3be2f11263e4c6d77356ba04f053f38ae917bd23",
          "version": 99,
          "amount": -488
        }
      },
      {
        "newObject": {
          "packageId": "0x0000000000000000000000000000000000000002",
          "transactionModule": "devnet_nft",
          "sender": "0xddee25bee35fa634a1d486d16281f333370ef3f2",
          "recipient": {
            "AddressOwner": "0xddee25bee35fa634a1d486d16281f333370ef3f2"
          },
          "objectType": "0x2::devnet_nft::DevNetNFT",
          "objectId": "0x1eaadc7b76011f5657821a6aa92eae6098689c9a",
          "version": 100
        }
      },
      {
        "moveEvent": {
          "packageId": "0x0000000000000000000000000000000000000002",
          "transactionModule": "devnet_nft",
          "sender": "0xddee25bee35fa634a1d486d16281f333370ef3f2",
          "type": "0x2::devnet_nft::MintNFTEvent",
          "fields": {
            "creator": "0xddee25bee35fa634a1d486d16281f333370ef3f2",
            "name": "Cosmostation NFT",
            "object_id": "0x1eaadc7b76011f5657821a6aa92eae6098689c9a"
          },
          "bcs": "Hqrce3YBH1ZXghpqqS6uYJhonJrd7iW+41+mNKHUhtFigfMzNw7z8hBDb3Ntb3N0YXRpb24gTkZU"
        }
      }
    ],
    "dependencies": ["CxQQcJfAyDkhxiLiXxrAkFREikMNnngwoGW7kVouMY7w"]
  }
}
```
