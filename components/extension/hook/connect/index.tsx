import { useState } from 'react';
import { useCosmosWallets } from '@cosmostation/use-wallets';

import Button from '@/components/common/button';
import Dialog from '@/components/common/dialog';
import Image from 'next/image';

import { Callout } from 'nextra-theme-docs';

import styles from './index.module.scss';

export default function Connect() {
  const [isOpen, setIsOpen] = useState(false);

  const { cosmosWallets, selectWallet, currentWallet } = useCosmosWallets();

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Connect Wallets</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.container}>
          {cosmosWallets.map((wallet) => (
            <div className={styles.buttonContainer} key={wallet.id}>
              <Button
                onClick={() => {
                  selectWallet(wallet.id);
                  setIsOpen(false);
                }}
              >
                <div className={styles.wallet}>
                  <Image src={wallet.logo} alt={wallet.name} width={40} height={40} />{' '}
                  <div className={styles.walletName}>{wallet.name}</div>
                </div>
              </Button>
            </div>
          ))}
          {cosmosWallets.length === 0 && (
            <div>
              No wallets found [
              <a
                className={styles.a}
                href="https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf"
              >
                link
              </a>
              ]
            </div>
          )}
        </div>
      </Dialog>
      {currentWallet && <Callout>'{currentWallet.name}' is selected</Callout>}
    </>
  );
}
