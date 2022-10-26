import React from 'react';

import { TextFieldStyled } from './TextField.styles';

export interface TextFieldProps {
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}

export const TextField = ({ onChange, placeholder, value }: TextFieldProps) => {
  return (
    <TextFieldStyled
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};
