import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'semantic-ui-css/semantic.min.css';

import MainPage from './components/MainPage';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root'),
);
