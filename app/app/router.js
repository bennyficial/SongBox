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

// export const SignedIn = TabNavigator(
//     {
//         List: {
//             screen: List,
//             navigationOptions: {
//                 tabBarLabel: 'List',
//                 tabBarIcon: ({tintColor}) => (<Icon active name='md-musical-notes' style={{fontSize: 28, color: tintColor}}/>),
//             }
//         },
//         Search: {
//             screen: Search,
//             navigationOptions: {
//                 tabBarLabel: 'Search',
//                 tabBarIcon: ({tintColor}) => (<Icon active name='md-musical-notes' style={{fontSize: 28, color: tintColor}}/>),
//             }
//         }
//     },
//     {
//         tabBarPosition: 'bottom',
//         animationEnabled: true,
//         tabBarOptions: {
//             activeTintColor: '#a483ef',
//             inactiveTintColor: 'white',
//             tabStyle: {
//                 backgroundColor: '#4A4458',
//                 paddingBottom: 0,
//                 padding: 0,
//                 margin: 0,
//             },
//             iconStyle: {
//                 width: 30,
//                 height: 30,
//                 paddingTop: 3,
//             },
//             labelStyle: {
//                 paddingBottom: 3,
//                 fontWeight: '800',
//             }
//         }
//     }
// );

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