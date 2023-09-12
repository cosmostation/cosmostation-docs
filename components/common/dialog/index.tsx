interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

import styles from './index.module.scss';

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
  if (isOpen)
    return (
      <div className={styles.container}>
        <div
          className={styles.background}
          onClick={() => {
            onClose();
          }}
        >
          <div className={styles.content} onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    );

  return null;
}
