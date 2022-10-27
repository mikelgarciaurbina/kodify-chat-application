import { ChatMessageProps } from './Dashboard.types';

export const messageParser = (
  chat: ChatMessageProps[],
  message: ChatMessageProps
): ChatMessageProps[] => {
  if (message.label.startsWith('/think')) {
    return [
      ...chat,
      { ...message, label: message.label.replace('/think ', ''), think: true },
    ];
  }
  if (message.label.startsWith('/oops')) {
    let idToRemove: string;
    for (let index = chat.length - 1; index >= 0; index--) {
      if (chat[index].user === message.user) {
        idToRemove = chat[index].id;
        break;
      }
    }

    return idToRemove ? chat.filter((item) => item.id !== idToRemove) : chat;
  }
  return [...chat, message];
};
