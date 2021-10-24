import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux'
import Navigate from './navigate';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <Provider store={store}>
            <Navigate />
          </Provider>
      );
  }
}
