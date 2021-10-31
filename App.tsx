import React from 'react';
import Window from './components/navigate';
import store from './redux/store';
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Window />
    </Provider>
  );
}

export default App