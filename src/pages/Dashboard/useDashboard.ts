import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { SocketProvider } from '../../providers';
import { ChatMessageProps } from './Dashboard.types';
import { messageParser } from './utils';

const userId = nanoid(6);

export const useDashboard = () => {
  const [nickname, setNickname] = useState<string>('');
  const [chat, setChat] = useState<ChatMessageProps[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    SocketProvider.connect(userId);

    SocketProvider.listen('chat_message', (message: ChatMessageProps) => {
      if (message.label.startsWith('/nick')) {
        if (message.user !== userId)
          setNickname(message.label.replace('/nick ', ''));
        return;
      }
      setChat((prevState) => messageParser(prevState, message));
    });

    return () => {
      SocketProvider.disconnect();
    };
  }, []);

  const onSendMessage = () => {
    if (!message) return;

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
    nickname,
    onSendMessage,
    setMessage,
    userId,
  };
};
