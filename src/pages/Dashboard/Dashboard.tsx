import React, { useState } from 'react';

import { Button, TextField } from '../../components';
import ChatBubble from '../../components/ChatBubble';
import { ChatContainer, Container, Footer, Wrapper } from './Dashboard.styles';

const CHAT = [
  {
    id: 1,
    label: 'Test 1',
    mine: true,
  },
  {
    id: 2,
    label: 'Test 2',
    mine: false,
  },
  {
    id: 3,
    label: 'Test 3',
    mine: false,
  },
  {
    id: 4,
    label: 'Test 4',
    mine: true,
  },
  {
    id: 5,
    label: 'Test 5',
    mine: true,
  },
  {
    id: 6,
    label: 'Test 6',
    mine: false,
  },
];

export const Dashboard = () => {
  const [message, setMessage] = useState('');

  return (
    <Wrapper>
      <Container>
        <ChatContainer>
          {CHAT.map((message) => (
            <ChatBubble
              key={message.id}
              label={message.label}
              mine={message.mine}
            />
          ))}
        </ChatContainer>
        <Footer>
          <TextField onChange={setMessage} value={message} />
          <Button label="pepito" />
        </Footer>
      </Container>
    </Wrapper>
  );
};
