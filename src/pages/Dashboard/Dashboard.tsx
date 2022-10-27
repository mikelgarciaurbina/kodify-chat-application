import React from 'react';

import { Button, ChatBubble, TextField } from '../../components';
import { useDashboard } from './useDashboard';
import { ChatMessageProps } from './Dashboard.types';
import {
  ChatContainer,
  Container,
  Footer,
  Header,
  Wrapper,
} from './Dashboard.styles';

export const Dashboard = () => {
  const { chat, message, nickname, onSendMessage, setMessage, userId } = useDashboard();

  return (
    <Wrapper>
      <Container>
        {nickname && <Header>{nickname}</Header>}
        <ChatContainer>
          {chat.map(({ id, label, think, user }: ChatMessageProps) => (
            <ChatBubble
              key={id}
              label={label}
              mine={user === userId}
              think={think}
            />
          ))}
        </ChatContainer>
        <Footer>
          <TextField
            onChange={setMessage}
            onPressEnter={onSendMessage}
            placeholder="Type a message"
            value={message}
          />
          <Button disabled={!message} label="Send" onClick={onSendMessage} />
        </Footer>
      </Container>
    </Wrapper>
  );
};
