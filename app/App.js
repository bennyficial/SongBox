import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './app/pages/Login'
import Signup from './app/pages/Signup'
import { createRootNavigator } from './app/router';
import { _isSignedIn } from './app/auth';

// const RootNavigator = StackNavigator(
//   {
//     Home: {
//       screen: Login,
//       navigationOptions: {

//         headerTintColor: 'white',
//         headerStyle: {
//           backgroundColor: '#26232E'
//         }
//       }
//     },
//     Signup: {
//       screen: Signup,
//       navigationOptions: {

//         headerTintColor: 'white',
//         headerStyle: {
//           backgroundColor: '#26232E'
//         }
//       }
//     }
//   }
// );

// #4A4458

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      fontsAreLoaded: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    })
    this.setState({fontsAreLoaded: true});

    _isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => console.log(err))
  }

  render() {
    const { checkedSignIn, signedIn, fontsAreLoaded } = this.state;

    if (!fontsAreLoaded) {
      return false
    }
    
    const Layout = createRootNavigator(signedIn);
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <Layout />
      </View>
    );
  }
}
