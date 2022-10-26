import styled from 'styled-components';

import BackgroundImage from '../../assets/background.jpg';

export const Wrapper = styled.div`
  background: url(${BackgroundImage});
  background-size: contain;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.section`
  background: ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const ChatContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.base_spacing * 2}px ${theme.base_spacing * 4}px`};
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  gap: ${({ theme }) => theme.base_spacing * 2}px;
  padding: ${({ theme }) =>
    `${theme.base_spacing * 1}px ${theme.base_spacing * 2}px`};
`;
