import styles from './index.module.scss';

interface ICardListValueProps {
  title: string;
  children: React.ReactNode;
  optional?: boolean;
}

const CardListValue: React.FC<ICardListValueProps> = ({ title, children, optional }) => {
  return (
    <div className={styles.contentValue}>
      <div className={styles.title}>
        {title}
        {optional && <span className={styles.essential}>*</span>}
      </div>
      <div className={styles.value}>{children}</div>
    </div>
  );
};

export default CardListValue;
