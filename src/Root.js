import React from 'react';
import { Provider } from 'react-redux'; // works with the connect function to give components access to redux store
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers'; // by default index.js is imported when importing a directory


// the provider receives all child components via the component's children property
// ie on the fly we can swap out the component beneath the Provider tag
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
