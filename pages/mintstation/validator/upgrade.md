# Node Upgrades

## Upgrades

Release procedures for validators and node operators are explained [here](https://github.com/cosmostation/mintstation).

### Upgrade types

There are two types of upgrades that happen on Mintstation Network. They are:

1. **Planned** feature upgrades or planned patches
2. **Unplanned** security upgrades.

#### Planned upgrade (via governance)

Planned upgrades, as the name suggests, are upgrades that are developed and proposed via governance. If approved by the community, these upgrades are undertaken by the chain automatically halting at the planned upgrade height.

Node operators are then required to swap the binary for the planned upgrade binary. After all node operators have upgraded and started their nodes the network will continue in the upgraded state.

#### Unplanned upgrade

Where emergency security patches are required node operators will be required to halt their nodes manually at the required upgrade height, swap the patched binary and restart their nodes. After all node operators have upgraded and started their nodes the network will continue in the upgraded state.
