import { ChatMessageProps } from './Dashboard.types';
import { messageParser } from './utils';

describe('Pages :: Dashboard :: utils :: messageParser', () => {
  it('should add the message', async () => {
    const chat: ChatMessageProps[] = [{ id: '1', label: 'Test1', user: 'U1' }];
    const message: ChatMessageProps = {
      id: '2',
      label: 'Test2',
      user: 'U2',
    };

    const result: ChatMessageProps[] = [
      { id: '1', label: 'Test1', user: 'U1' },
      {
        id: '2',
        label: 'Test2',
        user: 'U2',
      },
    ];

    expect(messageParser(chat, message)).toEqual(result);
  });
  it('should handle think command', async () => {
    const chat: ChatMessageProps[] = [{ id: '1', label: 'Test1', user: 'U1' }];
    const message: ChatMessageProps = {
      id: '2',
      label: '/think Test2',
      user: 'U2',
    };

    const result: ChatMessageProps[] = [
      { id: '1', label: 'Test1', user: 'U1' },
      {
        id: '2',
        label: 'Test2',
        think: true,
        user: 'U2',
      },
    ];

    expect(messageParser(chat, message)).toEqual(result);
  });
  describe('should handle oops command', () => {
    it('should not remove nothing if not have message', async () => {
      const chat: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
      ];
      const message: ChatMessageProps = {
        id: '2',
        label: '/oops',
        user: 'U2',
      };

      const result: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
      ];

      expect(messageParser(chat, message)).toEqual(result);
    });
    it('should remove the last message of the user that sent the message', async () => {
      const chat: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
        { id: '2', label: 'Test2', user: 'U2' },
      ];
      const message: ChatMessageProps = {
        id: '3',
        label: '/oops',
        user: 'U2',
      };

      const result: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
      ];

      expect(messageParser(chat, message)).toEqual(result);
    });
    it('should remove the last message even if have another message in the meddle', async () => {
      const chat: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
        { id: '2', label: 'Test2', user: 'U2' },
        { id: '3', label: 'Test3', user: 'U1' },
      ];
      const message: ChatMessageProps = {
        id: '4',
        label: '/oops',
        user: 'U2',
      };

      const result: ChatMessageProps[] = [
        { id: '1', label: 'Test1', user: 'U1' },
        { id: '3', label: 'Test3', user: 'U1' },
      ];

      expect(messageParser(chat, message)).toEqual(result);
    });
  });
});
