import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreens';

const RouterComponent = createStackNavigator(
  {
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {},
  },
);

export default createAppContainer(RouterComponent);
