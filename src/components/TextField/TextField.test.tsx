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
  it('should call to onPressEnter on press enter in the TextField', () => {
    const spyOnPressEnter = jest.fn();
    const { getByRole } = render(
      <TextField
        onChange={jest.fn()}
        onPressEnter={spyOnPressEnter}
        value="pepito"
      />
    );

    act(() => {
      fireEvent.keyPress(getByRole('textbox'), {
        key: 'Enter',
        code: 13,
        charCode: 13,
      });
    });

    expect(spyOnPressEnter).toHaveBeenCalledTimes(1);
  });
});
