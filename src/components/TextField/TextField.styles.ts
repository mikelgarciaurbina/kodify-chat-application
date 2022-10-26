import styled from 'styled-components';

export const TextFieldStyled = styled.input`
  background: ${({ theme }) => theme.palette.primary.dark};
  border: 0;
  border-radius: ${({ theme }) => theme.base_spacing}px;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.base_spacing * 2}px;
  height: ${({ theme }) => theme.base_spacing * 6}px;
  padding: 0 ${({ theme }) => theme.base_spacing}px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.palette.primary.light};
    opacity: 1;
  }
`;
