import React from 'react';
import { act, fireEvent, render } from '../../test-utils';

import { Button } from './Button';

describe('Compontent :: Button', () => {
  it('should render by default', () => {
    const { getByText } = render(<Button label="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });
  it('should call to onClick on click the button', () => {
    const spyOnClick = jest.fn();
    const { getByText } = render(<Button label="test" onClick={spyOnClick} />);

    act(() => {
      fireEvent.click(getByText('test'));
    });

    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });
  it('should not call to onClick on click the disabled button', () => {
    const spyOnClick = jest.fn();
    const { getByText } = render(
      <Button disabled label="test" onClick={spyOnClick} />
    );

    act(() => {
      fireEvent.click(getByText('test'));
    });

    expect(spyOnClick).toHaveBeenCalledTimes(0);
  });
});
