import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './constants/theme';
import { Dashboard } from './pages';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
