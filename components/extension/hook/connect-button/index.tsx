import { useState } from 'react';
import { useCosmosWallets } from '@cosmostation/use-wallets';

import Button from '@/components/common/button';
import Dialog from '@/components/common/dialog';
import Image from 'next/image';

import styles from './index.module.scss';

export default function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);

  const { cosmosWallets, selectWallet } = useCosmosWallets();

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Connect Wallets</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.container}>
          {cosmosWallets.map((wallet) => (
            <div className={styles.buttonContainer}>
              <Button
                onClick={() => {
                  selectWallet(wallet.id);
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
    </>
  );
}
