import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { SocketProvider } from '../../providers';
import { ChatMessageProps } from './Dashboard.types';

const userId = nanoid(6);

export const useDashboard = () => {
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

  return {
    chat,
    message,
    onSendMessage,
    setMessage,
    userId,
  };
};
