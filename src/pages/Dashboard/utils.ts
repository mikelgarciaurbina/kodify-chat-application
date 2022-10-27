import { ChatMessageProps } from './Dashboard.types';

export const messageParser = (
  chat: ChatMessageProps[],
  message: ChatMessageProps,
): ChatMessageProps[] => {
  return [...chat, message];
};
