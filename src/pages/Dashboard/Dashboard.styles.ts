import styled from 'styled-components';

export const Wrapper = styled.div`
  background: red;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.section`
  background: green;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const ChatContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.base_spacing * 2}px ${({ theme }) => theme.base_spacing * 2.5}px; 0;
`;

export const Footer = styled.footer`
  background: blue;
  display: flex;
  padding: ${({ theme }) => theme.base_spacing * 1}px;
`;
