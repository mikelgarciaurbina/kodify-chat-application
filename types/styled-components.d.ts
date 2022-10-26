import 'styled-components';
import Theme from '../src/constants/theme';

type THEME = typeof Theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends THEME {}
}
