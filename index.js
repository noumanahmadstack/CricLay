/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { store } from './src/redux/store/store';
import 'react-native-gesture-handler';
import App from './App';

const Main = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
