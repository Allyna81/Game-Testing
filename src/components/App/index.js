// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../footer';
import privacy from '../footer/privacy';
import website from '../footer/website';
import about from '../footer/about';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// == Composant
const App = () => (
    <Router>
        <Footer /> 
    <Switch>
      <Route path="/privacy" component={privacy} />
      <Route path="/website" component={website} />
      <Route path="/about" component={about} />
    </Switch>
    </Router>
  );

// == Export
export default App;
