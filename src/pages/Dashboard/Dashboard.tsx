import React from 'react';

import { Button, ChatBubble, TextField } from '../../components';
import { useDashboard } from './useDashboard';
import { ChatMessageProps } from './Dashboard.types';
import { ChatContainer, Container, Footer, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
  const { chat, message, onSendMessage, setMessage, userId } = useDashboard();

  return (
    <Wrapper>
      <Container>
        <ChatContainer>
          {chat.map(({ id, label, user }: ChatMessageProps) => (
            <ChatBubble key={id} label={label} mine={user === userId} />
          ))}
        </ChatContainer>
        <Footer>
          <TextField onChange={setMessage} value={message} />
          <Button label="pepito" onClick={onSendMessage} />
        </Footer>
      </Container>
    </Wrapper>
  );
};