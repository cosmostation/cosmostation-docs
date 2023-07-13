import clsx from 'clsx';
import styles from './index.module.scss';

interface ICardListTitleProps {
  children: React.ReactNode;
  border?: boolean;
}

const CardListTitle: React.FC<ICardListTitleProps> = ({ children, border }) => {
  return <div className={clsx(styles.title, border && styles.border)}>{children}</div>;
};

export default CardListTitle;
