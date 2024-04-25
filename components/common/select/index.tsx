import React, { SelectHTMLAttributes } from 'react';

import styles from './index.module.scss';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

const Select: React.FC<ISelectProps> = (props) => {
  const { children, ...selectProps } = props;

  return (
    <div className={styles.container}>
      <select {...selectProps} className={styles.select}>
        {props.children}
      </select>
    </div>
  );
};

export default Select;
