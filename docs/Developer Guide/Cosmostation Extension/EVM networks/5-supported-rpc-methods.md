---
sidebar_position: 5
---

# Supported RPC methods

## Ethereum JSON-RPC Methods

For the Ethereum JSON-RPC API, please see the [Ethereum wiki](https://ethereum.org/en/developers/docs/apis/json-rpc/#json-rpc-methods)

Important methods from this API include:

- [eth_accounts](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)
- [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
- [eth_getBalance](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)
- [eth_sign](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign)
- [eth_sendTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
- [eth_signTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction)

---

## eth_requestAccounts (EIP-1102)

[Link](https://eips.ethereum.org/EIPS/eip-1102)

##### Returns

`string[]` - An array of a single, hexadecimal Ethereum address string.

##### Example

```javascript
// provider.request or
window.cosmostation.ethereum.request({
  method: "eth_requestAccounts",
});
```

---

## wallet_addEthereumChain (EIP-3085)

[Link](https://eips.ethereum.org/EIPS/eip-3085)

##### Parameters

```typescript
type WalletAddEthereumChainParam = [
  {
    chainId: string;
    chainName: string;
    blockExplorerUrls?: string[];
    iconUrls?: string[];
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
    coinGeckoId?: string;
  }
];
```

##### Returns

`null` - The method returns null if the request was successful, and an error otherwise.

##### Example

```javascript
// provider.request or
window.cosmostation.ethereum.request({
  method: "wallet_addEthereumChain",
  params: [
    {
      chainId: "0x38",
      chainName: "Binance Smart Chain",
      rpcUrls: ["https://bsc-dataseed.binance.org"],
      iconUrls: [
        "https://www.coinreaders.com/imgdata/coinreaders_com/202107/2021072701234398.png",
      ],
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      blockExplorerUrls: ["https://bscscan.com"],
    },
  ],
});
```

---

## wallet_switchEthereumChain (EIP-3326)

[Link](https://eips.ethereum.org/EIPS/eip-3326)

##### Parameters

```typescript
type WalletSwitchEthereumChainParam = [
  {
    chainId: string;
  }
];
```

##### Returns

`null` - The method returns null if the request was successful, and an error otherwise.

##### Example

```javascript
// provider.request or
window.cosmostation.ethereum.request({
  method: "wallet_switchEthereumChain",
  params: [{ chainId: "0x38" }],
});
```

---

## wallet_watchAsset (EIP-747)

[Link](https://eips.ethereum.org/EIPS/eip-747)

##### Parameters

```typescript
type WalletWatchAssetParam = {
  type: string;
  options: {
    address: string;
    symbol: string;
    decimals: number;
    image?: string;
    coinGeckoId?: string;
  };
};
```

##### Returns

`boolean` - true if the request was successful, error otherwise.

##### Example

```javascript
// provider.request or
window.cosmostation.ethereum.request({
  method: "wallet_watchAsset",
  params: {
    type: "ERC20",
    options: {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      symbol: "WETH",
      decimals: 18,
    },
  },
});
```

---

## eth_signTypedData_v3 / eth_signTypedData_v4

##### Example

```typescript
const msgParams = JSON.stringify({
  domain: {
    // Defining the chain aka Rinkeby testnet or Ethereum Main Net
    chainId: 1,
    // Give a user friendly name to the specific contract you are signing for.
    name: "Ether Mail",
    // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    // Just let's you know the latest version. Definitely make sure the field name is correct.
    version: "1",
  },

  // Defining the message signing data content.
  message: {
    /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
    contents: "Hello, Bob!",
    attachedMoneyInEth: 4.2,
    from: {
      name: "Cow",
      wallets: [
        "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
        "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF",
      ],
    },
    to: [
      {
        name: "Bob",
        wallets: [
          "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
          "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
          "0xB0B0b0b0b0b0B000000000000000000000000000",
        ],
      },
    ],
  },
  // Refers to the keys of the *types* object below.
  primaryType: "Mail",
  types: {
    // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    // Not an EIP712Domain definition
    Group: [
      { name: "name", type: "string" },
      { name: "members", type: "Person[]" },
    ],
    // Refer to PrimaryType
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person[]" },
      { name: "contents", type: "string" },
    ],
    // Not an EIP712Domain definition
    Person: [
      { name: "name", type: "string" },
      { name: "wallets", type: "address[]" },
    ],
  },
});

const from = ""; // signer address
const params = [from, msgParams];
const method = "eth_signTypedData_v4";

// provider.request or
window.cosmostation.ethereum.request({
  method,
  params,
});
```
