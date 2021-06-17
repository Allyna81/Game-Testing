// == Import npm
import React from 'react';
import MainPage from 'src/containers/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameDetails from '../GameDetails';

const App = () => (
  <div>
    <Router>
      <div className="game-card">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/games/:id" component={GameDetails} />
      </div>
    </Router>

    
  </div>
);

// == Export
export default App;
