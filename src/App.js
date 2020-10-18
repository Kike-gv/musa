import React from 'react';

import { ThemeProvider } from 'styled-components'
import theme from './theme'

import Gradient from './components/Gradient'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Gradient />
    </ThemeProvider>
  );
}

export default App;
