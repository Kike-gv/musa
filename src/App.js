import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import firebase from './firebase';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';



// firebase.firestore().collection('times').add({
//   title: 'test kike',
//   time: 13
// })


function App() {

  const MOBILE_SIZE = 650;
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_SIZE);
  window.onresize = function (e) {
    setIsMobile(window.innerWidth < MOBILE_SIZE);
  };

  // const { pathname } = useLocation();


  return (
    <Router>
      <ThemeProvider theme={theme}>

        <Switch>
          {/* <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> */}
          <Route exact path="/">
            <HomePage isMobile={isMobile} />
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage isMobile={isMobile} />
          </Route>
        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
