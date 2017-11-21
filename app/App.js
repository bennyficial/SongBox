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

  state = { fontsAreLoaded: false };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    })
    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return false
    }
    return (
      <RootNavigator />
    );
  }
}
