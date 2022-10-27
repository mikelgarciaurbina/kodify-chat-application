import React from 'react';

import { act, fireEvent, render } from '../../test-utils';

import { useDashboard } from './useDashboard';
import { Dashboard } from './Dashboard';

const spyOnSendMessage = jest.fn();
const spySetMessage = jest.fn();

jest.mock('../../assets/background.jpg', () => 'fake/url');
jest.mock('./useDashboard', () => ({
  useDashboard: jest.fn(() => ({
    chat: [
      {
        id: '1',
        label: 'Test 1',
        user: 'U1',
      },
      {
        id: '2',
        label: 'Test 2',
        user: 'U1',
      },
      {
        id: '3',
        label: 'Test 3',
        user: 'U2',
      },
    ],
    message: '',
    onSendMessage: spyOnSendMessage,
    setMessage: spySetMessage,
    userId: 'U1',
  })),
}));

const renderComponent = () => render(<Dashboard />);

beforeEach(() => jest.clearAllMocks());

describe('Pages :: Dashboard', () => {
  it('should properly render', () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeInTheDocument();
  });
  it('should render 3 messages', () => {
    const { getByText } = renderComponent();
    expect(getByText('Test 1')).toBeInTheDocument();
    expect(getByText('Test 2')).toBeInTheDocument();
    expect(getByText('Test 3')).toBeInTheDocument();
  });
  it('should render a input component', () => {
    const { getByRole } = renderComponent();
    expect(getByRole('textbox')).toBeInTheDocument();
  });
  it('should call to setMessage on change the input value', () => {
    const { getByRole } = renderComponent();

    act(() => {
      fireEvent.change(getByRole('textbox'), {
        target: { value: 'test-input' },
      });
    });

    expect(spySetMessage).toHaveBeenCalledTimes(1);
    expect(spySetMessage).toHaveBeenCalledWith('test-input');
  });
  it('should render a button component', () => {
    const { getByText } = renderComponent();
    expect(getByText('Send')).toBeInTheDocument();
  });
  it('should call to onSendMessage on click in the send button', async () => {
    (useDashboard as jest.Mock).mockReturnValueOnce({
      chat: [],
      message: 'tests',
      onSendMessage: spyOnSendMessage,
      setMessage: jest.fn(),
      userId: 'U1',
    });
    const { getByText } = renderComponent();

    act(() => {
      fireEvent.click(getByText('Send'));
    });

    expect(spyOnSendMessage).toHaveBeenCalledTimes(1);
  });
  it('should not call to onSendMessage on click in the send button without message', () => {
    const { getByText } = renderComponent();

    act(() => {
      fireEvent.click(getByText('Send'));
    });

    expect(spyOnSendMessage).toHaveBeenCalledTimes(0);
  });
});
