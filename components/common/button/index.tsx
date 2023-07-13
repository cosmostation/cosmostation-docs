import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';
import { omit } from 'ramda';
import styles from './index.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  emptyColor?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const inputProps = omit(['emptyColor'], props);

  return (
    <div>
      <button
        {...inputProps}
        className={clsx(styles.button, props.emptyColor && styles.emptyColor)}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
