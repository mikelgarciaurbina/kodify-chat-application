import React from 'react';

import { ButtonStyled } from './Button.styles';

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({ disabled, label, onClick }: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} type="button" onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
