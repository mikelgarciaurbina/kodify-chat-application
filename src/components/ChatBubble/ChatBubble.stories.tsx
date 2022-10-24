import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../constants/theme';
import { ChatBubble } from './ChatBubble';

export default {
  title: 'Components/ChatBubble',
  component: ChatBubble,
} as ComponentMeta<typeof ChatBubble>;

const Template: ComponentStory<typeof ChatBubble> = (args) => (
  <ThemeProvider theme={theme}>
    <ChatBubble {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Chat Bubble',
};
