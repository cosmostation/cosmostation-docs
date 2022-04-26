---
sidebar_position: 4
---

# Sign Transcation

Sign transcation via Cosmostation Extension

```typescript
const response = await provider.signAmino(
  'cosmos',
  {
    doc: {
      chain_id: 'cosmoshub-4',
      fee: { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' },
      memo: '',
      msgs: [
        {
          type: 'cosmos-sdk/MsgSend',
          value: {
            from_address: 'cosmos1wepghweioghweiog',
            to_address: 'cosmos1weogihweoighweoigheoiw',
            amount: [{ denom: 'uatom', amount: '5000' }],
          },
        },
      ],
      sequence: '20',
      account_number: '632177',
    },
  },
  { memo: true, fee: true }, // edit | optional (default: { memo: false, fee: false }),
);
```

### Response


```typescript title=Model
export type SignAminoResponse = {
  signature: string;
  pub_key: { type: string; value: string };
  signed_doc: SignAminoDoc;
};

export type SignAminoDoc = {
  chain_id: string;
  sequence: string;
  account_number: string;
  fee: Fee;
  memo: string;
  msgs: Msg[];
};

export type Amount = {
  denom: string;
  amount: string;
};

export type Msg<T = unknown> = {
  type: string;
  value: T;
};

export type Fee = { amount: Amount[]; gas: string };
```

```json title=Example
{
  "pub_key": { "type": "tendermint/PubKeySecp256k1", "value": "A00Jvfv5luvAODNiOPIMZpDTWSq7qvoFV8k7ptdsDqLU" },
  "signature": "signature==",
  "signed_doc": {
    "chain_id": "cosmoshub-4",
    "fee": { "amount": [{ "denom": "uatom", "amount": "5000" }], "gas": "200000" },
    "memo": "",
    "msgs": [
      {
        "type": "cosmos-sdk/MsgSend",
        "value": {
          "from_address": "cosmos1gr0e3pj3y6fqvzyfm0qxyw9h5dwfrvh8zv3x9p",
          "to_address": "cosmos1ursv4z57pw8ly2jsgn09dyjha4qrk7aen987ld",
          "amount": [{ "denom": "uatom", "amount": "5000" }]
        }
      }
    ],
    "sequence": "20",
    "account_number": "632177"
  }
}
```