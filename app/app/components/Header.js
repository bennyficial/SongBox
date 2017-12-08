import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const Header = (props) => {
    _onPressRefresh = () => {
        console.log(' ')
        console.log('refresh is pressed')
        oBP();
    }
	return (

		<View style={styles.viewStyle}>
		    <Text style={styles.textStyle}>{props.headerText}</Text>
            <TouchableOpacity 
                style={{ marginBottom:15, alignSelf:'flex-end'}}
                onPress={() => this._onPressRefresh()}>
                <Icon active name='md-refresh' style={{fontSize: 23, color: 'white', paddingRight: 10}}/>
            </TouchableOpacity>
		</View>
	)
}

const styles = {
    viewStyle: {
        backgroundColor: '#26232E',
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 2,
        position: 'relative',
        borderBottomColor: '#474057',
        borderBottomWidth: 1.5,
        flexDirection: 'row'
    },
	textStyle: {
        fontSize: 18,
        color: '#E7E7E7',
        fontWeight: 'bold',
        marginBottom: 15,
        alignSelf: 'flex-start',
	}
}

export { Header }