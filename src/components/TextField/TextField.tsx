import React from 'react';

export interface TextFieldProps {
  onChange: (value: string) => void;
  value: string;
}

export const TextField = ({ onChange, value }: TextFieldProps) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};
