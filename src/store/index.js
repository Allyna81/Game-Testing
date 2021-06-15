import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import games from 'src/middlewares/games';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(games),
);

const store = createStore(reducer, enhancers);

export default store;
