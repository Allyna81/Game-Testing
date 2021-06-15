import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from '../Games/Home';
import GameDetails from '../Games/GameDetails';
import Games from '../Games';
import GamesByCategory from '../Games/GamesByCategory';
import GamesByPlateform from '../Games/GamesByPlateform';
import Reviews from '../Games/Reviews';
import UserProfile from '../UserProfile';
import PrivacyTerms from '../PrivacyTerms';
import LogModal from '../LogModal';
import AboutUs from '../AboutUs';

//* defining the routes
const App = () => (
  <div className="ui container">
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/games/:categoryId" component={GamesByCategory} />
        <Route path="/games/:plateformId" component={GamesByPlateform} />
        <Route path="/login" component={LogModal} />
        <Route path="/contact" component={AboutUs} />
        <Route path="/privacy" component={PrivacyTerms} />
        <Route path="/games/:id" component={GameDetails} />
        <Route path="/games/:id/review" component={Reviews} />
        <Route path="/profile" component={UserProfile} />
      </div>
    </Router>
  </div>
);

// == Export
export default App;
