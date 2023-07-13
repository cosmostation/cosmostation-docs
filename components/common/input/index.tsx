import React, { InputHTMLAttributes } from 'react';

import { omit } from 'ramda';
import styles from './index.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: boolean;
  placeholder?: string;
  type?: 'string' | 'number' | 'datetime';
}

const Input: React.FC<IInputProps> = (props) => {
  const inputProps = omit(['label', 'optional', 'type'], props);

  return <input {...inputProps} className={styles.input} />;
};

export default Input;
