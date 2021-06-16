import React from 'react';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../footer';
import privacy from '../footer/privacy';
import website from '../footer/website';
import about from '../footer/about';
=======
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
=======
import MainPage from 'src/containers/MainPage';
>>>>>>> mainPage
>>>>>>> 09c696f1cc7c6c629dabaa2aa6a2367edcb421d4

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
<<<<<<< HEAD
  <Router>
    <Footer />
    <Switch>
      <Route path="/privacy" component={privacy} />
      <Route path="/website" component={website} />
      <Route path="/about" component={about} />
    </Switch>
  </Router>
=======
  <div>
    <Router>
      <div className="header">
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
    <MainPage />
  </div>
>>>>>>> 09c696f1cc7c6c629dabaa2aa6a2367edcb421d4
);

// == Export
export default App;
