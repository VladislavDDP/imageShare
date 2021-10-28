import React from 'react';
import Navigate from './navigate';
import store from './redux/store';
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}

export default App