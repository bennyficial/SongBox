import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import { Container, Item, Icon, Input, Spinner } from 'native-base';


class SearchBar extends Component {
    state = { term: '' }

    render(){
        const {
            containerStyle,
            itemStyle,
            searchTextStyle,
            buttonStyle,
        } = styles;

        return (
            // <Container style={containerStyle}>
                <Item style={itemStyle}>
                    <Icon name="ios-search" style={{color: 'white'}}/>
                    <Input style={styles.searchTextStyle}
                        placeholder='Search Music Video'
                        autoCapitalize='none'
                        autoComplete='false'
                        underlineColorAndroid='transparent'
                        onChangeText={(term) => this.setState({term})}
                        onSubmitEditing={() => this.props.onPressSearch(this.state.term)}
                        value={this.state.term}
                    />
                </Item>
            // </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#26232E'
    },
    itemStyle: {
        flexDirection: 'row', 
        paddingRight: 20, paddingLeft: 20, 
        marginLeft: 10, marginRight: 10
    },
    searchTextStyle: {
        color: '#fff',
    },
})

export { SearchBar }