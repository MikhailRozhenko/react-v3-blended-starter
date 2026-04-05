import React from 'react';
import style from './Text.module.css';

interface TextProps {
  children?: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  marginBottom?: string;
  className?: string;
  isError?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  textAlign = 'left',
  marginBottom = '0',
  className = '',
  isError = false,
}) => {
  return (
    <p
      style={{ textAlign, marginBottom }}
      className={`${style.text} ${isError ? style.error : ''} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
