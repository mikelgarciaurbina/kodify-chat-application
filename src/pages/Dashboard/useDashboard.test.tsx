import { act, renderHook } from '@testing-library/react-hooks';

import { SocketProvider } from '../../providers';
import { useDashboard } from './useDashboard';

jest.mock('nanoid', () => {
  return {
    nanoid: jest.fn(() => 'UID0001'),
  };
});
jest.mock('../../providers', () => {
  return {
    SocketProvider: {
      connect: jest.fn(),
      disconnect: jest.fn(),
      listen: jest.fn(),
      emit: jest.fn(),
    },
  };
});

beforeEach(() => jest.clearAllMocks());

describe('Pages :: Dashboard :: useDashboard', () => {
  it('should return the userId', async () => {
    const { result } = renderHook(() => useDashboard());

    expect(result.current.userId).toBe('UID0001');
  });
  it('should call to connect and listen on init dashboard', async () => {
    renderHook(() => useDashboard());

    expect(SocketProvider.connect).toHaveBeenCalledTimes(1);
    expect(SocketProvider.connect).toHaveBeenCalledWith('UID0001');
    expect(SocketProvider.listen).toHaveBeenCalledTimes(1);
    expect(SocketProvider.listen).toHaveBeenCalledWith(
      'chat_message',
      expect.anything()
    );
  });
  it('should call to disconnect on destructuring', async () => {
    const { unmount } = renderHook(() => useDashboard());

    unmount();

    expect(SocketProvider.disconnect).toHaveBeenCalledTimes(1);
  });
  it('should call to emit and setMessage on call to onSendMessage function', async () => {
    const { result } = renderHook(() => useDashboard());

    act(() => {
      result.current.setMessage('pepito');
    });

    expect(result.current.message).toBe('pepito');

    act(() => {
      result.current.onSendMessage();
    });

    expect(result.current.message).toBe('');
    expect(SocketProvider.emit).toHaveBeenCalledTimes(1);
    expect(SocketProvider.emit).toHaveBeenCalledWith('chat_message', {
      id: 'UID0001',
      label: 'pepito',
      user: 'UID0001',
    });
  });
});
