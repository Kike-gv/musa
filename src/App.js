import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import firebase from './firebase';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';



// firebase.firestore().collection('times').add({
//   title: 'test kike',
//   time: 13
// })


function App() {


  return (
    <Router>
      <ThemeProvider theme={theme}>
        
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
