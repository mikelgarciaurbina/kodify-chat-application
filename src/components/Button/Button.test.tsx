import React from 'react';
import { fireEvent, render } from '../../test-utils';

import { Button } from './Button';

describe('Compontent :: Button', () => {
  it('should render by default', () => {
    const { getByText } = render(<Button label="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });
  it('should call to onClick on click the button', () => {
    const spyOnClick = jest.fn();
    const { getByText } = render(<Button label="test" onClick={spyOnClick} />);

    fireEvent.click(getByText('test'));
    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });
});
