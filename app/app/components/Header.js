import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
		    <Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
    viewStyle: {
        backgroundColor: '#26232E',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        borderBottomColor: '#474057',
        borderBottomWidth: 1.5
    },
	textStyle: {
        fontSize: 18,
        color: '#E7E7E7',
        fontWeight: 'bold',
        marginBottom: 15
	}
}

export { Header }