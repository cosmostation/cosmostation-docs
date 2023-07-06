import React, { InputHTMLAttributes } from 'react';

import { omit } from 'ramda';
import styles from './index.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: boolean;
  type?: 'string' | 'number' | 'datetime';
}

const Input: React.FC<IInputProps> = (props) => {
  const inputProps = omit(['label', 'optional', 'type'], props);

  return (
    <div>
      <span>
        {props.label}
        {!props.optional && '*'}
      </span>
      <input {...inputProps} className={styles.input} />
    </div>
  );
};

export default Input;
