import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset',
  children?: React.ReactNode,
  onClick?: () => void
}

const Button = ({type, onClick, children}: ButtonProps) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;