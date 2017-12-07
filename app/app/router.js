import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Login from './pages/Login';
import Signup from './pages/Signup';
import List from './pages/List';
import Search from './pages/Search';

// Navigator when user is signed out 
export const SignedOut = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#26232E'
            }
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#26232E'
            }
        }
    }
});

export const SignedIn = StackNavigator ({
    List: { screen: List },
    Search: { screen: Search }
})


export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
            screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: 'none',
            mode: 'modal',
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
            // initialRouteName: 'SignedIn'
        }
    );
};