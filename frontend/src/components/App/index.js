import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Logo from '../Games/logo.svg';
import Login from "../../components/login.component";
import Register from "../../components/register.component";
import Home from '../Games/Home';
import GameDetails from '../Games/GameDetails';
import Reviews from '../Reviews/Reviews';
import PrivacyTerms from '../PrivacyTerms';
import AboutUs from '../AboutUs';
import '../styles/style.css'
import Profile from "../profile.component";

import { logout } from "../../store/actions/auth.action";
import { clearMessage } from "../../store/actions/message.action";

import { history } from '../helpers/history';
import ViewAllGameCard from '../ViewAllGameCard';

class App extends Component {
    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        currentUser: undefined,
      };
  
      history.listen((location) => {
        props.dispatch(clearMessage()); // clear message when changing location
      });
    }
  
    componentDidMount() {
      const user = this.props.user;
  
      if (user) {
        this.setState({
          currentUser: user,
        });
      }
    }
  
    logOut() {
      this.props.dispatch(logout());
    }
  
    render() {
      const { currentUser} = this.state;
  
//* start your project by defining the routes
return (
        <div>
        <Router history={history}>
          <div className='reset'>
            <nav className="navbar navbar-expand navbar-dark reset base header">
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                <img src={Logo} alt='Logo GameTesting'></img>
                </Link>
              </li>

            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="reset base">
              <Switch>
           <Route path='/' exact  component={Home} />
           <Route  path='/games' exact  component={ViewAllGameCard} />
           <Route  path='/contact' exact component={AboutUs} />
           <Route  path='/privacy' exact component={PrivacyTerms} />
           <Route  path='/games/:gameId' exact component={GameDetails} />
           <Route  path='/games/:gameId/review' exact component={Reviews} />
           <Route  path="/login" exact component={Login} />
              <Route  path="/register" exact component={Register} />
              <Route  path="/profile" exact  component={Profile} />
              </Switch>
       </div>
       </div>
   </Router>
   </div>
     );
    }
  }
  
  function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }

// == Export

export default connect(mapStateToProps)(App);
