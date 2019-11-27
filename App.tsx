import React, { Component } from 'react';
import RouterComponent from './src/Router';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
};
