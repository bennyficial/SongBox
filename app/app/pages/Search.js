import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { Item, Icon, Input, Container, Spinner } from 'native-base';
import { SearchBar, VideoList } from '../components';
import API from '../../api/songAPI';

export default class Search extends React.Component {

    state = {
        videos: [],
        artist: '',
        title: '',
        source: '',
        loading: false,
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: 'Search',
        headerTintColor: 'white',
        // headerLeft:
        //     <Icon active name={'ios-return-left'}
        //     onPress={ () => { navigation.navigate('List') }} />,
        headerStyle: {
            backgroundColor: '#26232E',
        },
    })
  
    onPressSearch = term => {
        this.search(term)
    }

    onButtonPress = () => {
        this.props.navigation.navigate('List');
    }

    search = term => {
        this.setState({ loading: true });
        const searchTerm = term.toLowerCase().replace(' ', '+');
        
        API.searchSong(searchTerm)
            .then(res => {
                this.setState({ 
                    loading: false,
                    videos: JSON.parse(res.data).items
                })
                
            })
            .catch(err => console.log(err))
    }

    render () {
        const { loading, videos } = this.state;
        const { goBack } = this.props.navigation;

        return (
            <View style={{flex: 1,backgroundColor: '#26232E'}}>
                <SearchBar 
                    loading={loading}
                    onPressSearch={this.onPressSearch}
                />
                {this.state.loading ? <Spinner color='grey' /> : <Text></Text>}
                <VideoList videos={videos} onButtonPress={this.onButtonPress} />
                {/* <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('List')} >
                    <Text> GO TO LIST </Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    
})