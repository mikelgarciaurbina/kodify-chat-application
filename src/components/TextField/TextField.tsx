import React from 'react';

import { TextFieldStyled } from './TextField.styles';

export interface TextFieldProps {
  onChange: (value: string) => void;
  onPressEnter?: () => void;
  placeholder?: string;
  value: string;
}

export const TextField = ({
  onChange,
  onPressEnter,
  placeholder,
  value,
}: TextFieldProps) => {
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onPressEnter();
    }
  };

  return (
    <TextFieldStyled
      type="text"
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      value={value}
    />
  );
};
