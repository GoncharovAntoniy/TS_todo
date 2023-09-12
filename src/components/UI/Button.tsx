import React from 'react';
import s from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, children, disabled = false, ...props }) => {
  return (
    <button
      {...props}
      className={s.button}
      onClick={()=>onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
