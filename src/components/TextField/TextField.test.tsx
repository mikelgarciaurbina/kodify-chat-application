import React from 'react';

import { act, fireEvent, render } from '../../test-utils';

import { TextField } from './TextField';

describe('Compontent :: TextField', () => {
  it('should render by default', () => {
    const { getByRole } = render(
      <TextField value="test" onChange={jest.fn()} />
    );
    expect(getByRole('textbox')).toBeInTheDocument();
  });
  it('should call to onChange on type in the TextField', () => {
    const spyOnChange = jest.fn();
    const { getByRole } = render(
      <TextField onChange={spyOnChange} value="pepito" />
    );

    act(() => {
      fireEvent.change(getByRole('textbox'), {
        target: { value: 'tests' },
      });
    });

    expect(spyOnChange).toHaveBeenCalledTimes(1);
    expect(spyOnChange).toHaveBeenCalledWith('tests');
  });
});
