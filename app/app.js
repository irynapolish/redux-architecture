// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { StyleProvider } from 'native-base-shoutem-theme';
import WeatherContainer from './containers/weather-container/weather-container';
import theme from './styles/theme';
import { Text } from 'components';

const store = configureStore({});

console.ignoredYellowBox = [
  'Warning: Navigator',
  'Warning: Overriding',
  'Remote',
  'Task',
  'Native TextInput',
];

const app = () => (
  <StyleProvider style={theme()}>
    <Provider store={store}>
      <WeatherContainer />
    </Provider>
  </StyleProvider>
);

export default app;
