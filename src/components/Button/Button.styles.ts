import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${({ disabled, theme }) =>
    disabled ? theme.palette.grey[600] : theme.palette.secondary.main};
  border: 0;
  border-radius: ${({ theme }) => theme.base_spacing}px;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.base_spacing * 2}px;
  height: ${({ theme }) => theme.base_spacing * 6}px;
  min-width: ${({ theme }) => theme.base_spacing * 10}px;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background: ${({ theme }) => theme.palette.secondary.dark};
        cursor: pointer;
      }

      &:active {
        background: ${({ theme }) => theme.palette.secondary.light};
      }
    `}
`;
