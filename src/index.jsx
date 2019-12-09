import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import newImageReducer from './reducers/newImageReducer';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(newImageReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app-root')
);
