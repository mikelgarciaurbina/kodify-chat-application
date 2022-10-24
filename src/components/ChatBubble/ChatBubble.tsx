import React from 'react';

import { Container } from './ChatBubble.styles';

export interface ChatBubbleProps {
  label: string;
  mine: boolean;
  think?: boolean;
}

export const ChatBubble = ({ label, mine, think }: ChatBubbleProps) => {
  return (
    <Container $mine={mine} $think={think}>
      {label}
    </Container>
  );
};
