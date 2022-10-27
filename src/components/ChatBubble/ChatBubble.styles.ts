import styled, { css } from 'styled-components';

type ContainerProps = {
  $mine: boolean;
  $think: boolean;
};

export const Container = styled.p<ContainerProps>`
  border-radius: ${({ theme }) => theme.base_spacing * 4}px;
  line-height: ${({ theme }) => theme.base_spacing * 3}px;
  margin-bottom: ${({ theme }) => theme.base_spacing * 1.5}px;
  max-width: ${({ theme }) => theme.base_spacing * 30}px;
  padding: ${({ theme }) =>
    `${theme.base_spacing * 1.5}px ${theme.base_spacing * 2.5}px`};
  position: relative;
  word-wrap: break-word;

  &:before,
  &:after {
    bottom: 0;
    content: '';
    height: 25px;
    position: absolute;
  }

  ${({ $mine, $think }) =>
    $mine
      ? css`
          align-self: flex-end;
          background: ${({ theme }) => theme.palette.success.main};
          color: ${({ theme }) => $think ? theme.palette.grey[800] : theme.palette.common.white};

          &:before {
            right: -7px;
            width: 20px;
            background-color: ${({ theme }) => theme.palette.success.main};
            border-bottom-left-radius: 16px 14px;
          }

          &:after {
            right: -26px;
            width: 26px;
            background-color: ${({ theme }) => theme.palette.grey[300]};
            border-bottom-left-radius: 10px;
          }
        `
      : css`
          background: ${({ theme }) => theme.palette.grey[800]};
          color: ${({ theme }) => $think ? theme.palette.grey[800] : theme.palette.common.white};
          align-self: flex-start;

          &:before {
            left: -7px;
            width: 20px;
            background-color: ${({ theme }) => theme.palette.grey[800]};
            border-bottom-right-radius: 16px 14px;
          }

          &:after {
            left: -26px;
            width: 26px;
            background-color: ${({ theme }) => theme.palette.grey[300]};
            border-bottom-right-radius: 10px;
          }
        `}
`;
