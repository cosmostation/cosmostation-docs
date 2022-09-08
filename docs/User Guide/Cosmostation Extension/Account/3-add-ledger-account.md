---
sidebar_position: 3
---

# Add Ledger Account

Create a new ledger wallet

## Supported Devices & Connection Method

- Ledger S, X
- USB, HID

## Adding Ledger Account

> Account icon → setting icon → Add account → Create a new ledger account → Account name → HD path setting → Done

<div style={{display: "flex", justifyContent: 'center'}}>
    <video controls width="364">
        <source src="/video/ledgerAccount.mp4" type="video/mp4" />
    </video>
</div>

## HD path setting

> Up to 101 Ledger accounts and wallets can be derived from a single set of mnemonics in a Ledger by assigning any number smaller than 101 to HD paths when creating a Ledger account.

<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_hdpath_2.png" style={{width: "357px", height: "598px"}} /></div>
    <div><img src="/img/guide/extension/account/add/ledger_hdpath_1.png" style={{width: "357px", height: "598px"}} /></div>
</div>

## Connecting Ledger

> Select the new Ledger account to connect on home screen.

<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect.png" style={{width: "666px", height: "362px"}} /></div>
</div>

### Cosmos Networks

> `Cosmostation extension wallet supports Cosmos SDK chain wallets derived from HD paths` 44'/118'/0'/0/n. Connecting to any Cosmos SDK chain with a Ledger automatically derives all the Cosmos SDK chain wallets supported by a Ledger account.

<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_cosmos_1.png" style={{width: "357px", height: "598px"}} /></div>
</div>
<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_cosmos_2.png" style={{width: "357px", height: "598px"}} /></div>
</div>
<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_cosmos_3.png" style={{width: "357px", height: "598px"}} /></div>
</div>

### EVM Networks

> `Cosmostation extension wallet supports EVM wallets derived from HD paths 44'/60'/0'/0/n`. Connecting to any EVM network with a Ledger automatically derives all the EVM network wallets supported by a Ledger account.

<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_evm_1.png" style={{width: "357px", height: "598px"}} /></div>
</div>
<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_evm_2.png" style={{width: "357px", height: "598px"}} /></div>
</div>
<div style={{display: "flex", justifyContent: 'center', columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_connect_evm_3.png" style={{width: "357px", height: "598px"}} /></div>
</div>

### Not Supported Networks

> 44'/118'/0'/0/n is a generic HD path for Cosmos SDK chains, but some networks use custom HD paths assigned by their network foundations. For example, a Cosmos SDK chain Crypto.org’s official HD path used by the foundation and [Ledger](https://support.ledger.com/hc/en-us/articles/360020501120-Crypto-org-Chain-CRO-?docs=true) is 44'/394'/0'/0/n.

> In an effort to sync with the network foundations and Ledger, Cosmostation extension wallet derives wallets solely from HD paths used by the foundations and Ledger. Instead of deriving all the Cosmos SDK chain wallets from 44'/118'/0'/0/n path, Cosmostation only supports the wallets of Cosmos SDK chains whose official HD path is 44'/118'/0'/0/n for now.

> Custom HD path wallets will be supported in future updates.

## Signing Transactions

### Cosmos SDK Chains

<div style={{display: "flex", columnGap: "10px"}}>
    <div><img src="/img/guide/extension/account/add/ledger_sign.png" style={{width: "357px", height: "598px"}} /></div>
</div>

1. Open the Cosmos app on Ledger

2. Check the review message on Ledger

3. Approve or reject a transaction

`All the Cosmos SDK chains' transactions can be signed from the Cosmos app.`

### Ethereum & EVM

1. Open the Ethereum app on Ledger

2. Check the review message on Ledger

3. Approve or reject a transaction

`All the EVM chains' transactions can be signed from the Ethereum app.`
