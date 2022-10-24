import React from 'react';
import { render } from '../../test-utils';

import { ChatBubble } from './ChatBubble';

describe('Compontent :: ChatBubble', () => {
  it('should render by default', () => {
    const { getByText } = render(<ChatBubble label="test" mine={false} />);
    expect(getByText('test')).toBeInTheDocument();
  });
});
