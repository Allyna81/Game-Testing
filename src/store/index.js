import { createStore } from 'redux';

import reducer from 'src/reducers';
// import recipes from 'src/middlewares/recipes';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
