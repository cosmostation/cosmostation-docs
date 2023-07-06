import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import styles from './index.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <div>
      <button {...props} className={styles.button}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
