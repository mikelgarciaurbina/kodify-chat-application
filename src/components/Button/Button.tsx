import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
