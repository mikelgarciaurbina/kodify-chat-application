import styled, { css } from 'styled-components';

type ContainerProps = {
  $mine: boolean;
  $think: boolean;
};

export const Container = styled.p<ContainerProps>`
  border-radius: 25px;
  line-height: 24px;
  margin-bottom: 12px;
  max-width: 255px;
  padding: 10px 20px;
  position: relative;
  word-wrap: break-word;

  &:before,
  &:after {
    bottom: 0;
    content: '';
    height: 25px;
    position: absolute;
  }

  ${({ $mine }) =>
    $mine
      ? css`
          align-self: flex-end;
          background: ${({ theme }) => theme.palette.success.main};
          color: ${({ theme, $think }) => $think ? theme.palette.grey[300] : theme.palette.common.white};

          &:before {
            right: -7px;
            width: 20px;
            background-color: ${({ theme }) => theme.palette.success.main};
            border-bottom-left-radius: 16px 14px;
          }

          &:after {
            right: -26px;
            width: 26px;
            background-color: ${({ theme }) => theme.palette.common.white};
            border-bottom-left-radius: 10px;
          }
        `
      : css`
          background: ${({ theme }) => theme.palette.grey[300]};
          color: ${({ theme, $think }) => $think ? theme.palette.grey[800] : theme.palette.common.black};
          align-self: flex-start;

          &:before {
            left: -7px;
            width: 20px;
            background-color: ${({ theme }) => theme.palette.grey[300]};
            border-bottom-right-radius: 16px 14px;
          }

          &:after {
            left: -26px;
            width: 26px;
            background-color: ${({ theme }) => theme.palette.common.white};
            border-bottom-right-radius: 10px;
          }
        `}
`;
