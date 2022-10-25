import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { SocketProvider } from '../../providers';
import { Button, ChatBubble, TextField } from '../../components';
import { ChatContainer, Container, Footer, Wrapper } from './Dashboard.styles';

interface ChatMessageProps {
  id: string;
  label: string;
  user: string;
}

const userId = nanoid(6);

export const Dashboard = () => {
  const [chat, setChat] = useState<ChatMessageProps[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    SocketProvider.connect(userId);

    SocketProvider.listen('chat_message', (message: ChatMessageProps) => {
      setChat((prevState) => [...prevState, message]);
    });

    return () => {
      SocketProvider.disconnect();
    };
  }, []);

  const onSendMessage = () => {
    SocketProvider.emit('chat_message', {
      id: nanoid(8),
      label: message,
      user: userId,
    });
    setMessage('');
  };

  return (
    <Wrapper>
      <Container>
        <ChatContainer>
          {chat.map(({ id, label, user }) => (
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
