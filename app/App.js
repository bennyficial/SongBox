import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './app/pages/Login'
import Signup from './app/pages/Signup'

const RootNavigator = StackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerTitle: 'Signup'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
