import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Gradient from './components/Gradient';
import Menu from './components/Menu';
import DescriptionText from './components/DescriptionText';

import MusaIcon from './icons/MusaIcon';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

function App() {


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Gradient>
          <Menu />
          <MusaIcon size={18} />
          <DescriptionText />
        </Gradient>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage />
          </Route>
        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
