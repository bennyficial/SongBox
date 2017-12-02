import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
// import { Header } from '../components';

export default class List extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'List',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#26232E',
        },
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon active name='md-search' style={{fontSize: 28, color: 'white', paddingRight: 10}}/>
            </TouchableOpacity>
        )
    })

    render () {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#26232E'}}>
                <Text style={{color: 'white'}}> LISTLIST </Text>
            </View>
        )
    }
}