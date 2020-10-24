import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Gradient from './components/Gradient';
import Menu from './components/Menu';
import DescriptionText from './components/DescriptionText';
import Timeline from './components/Timeline';

import MusaIcon from './icons/MusaIcon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Gradient> 
        <Menu />
        <MusaIcon size={18} />
        <DescriptionText />
      </Gradient>
      
      <Timeline />

    </ThemeProvider>
  );
}

export default App;
