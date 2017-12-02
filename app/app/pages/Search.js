import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Item, Icon, Input, Container } from 'native-base';
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
    
    static navigationOptions = {
        title: Search,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#26232E',
        },
    }

    onPressSearch = term => {
        this.search(term)
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
                // console.log(this.state.videos)
            })
            .catch(err => console.log(err))
    }

    render () {
        const { loading, videos } = this.state;
        return (
            <View style={{flex: 1,backgroundColor: '#26232E'}}>
                <SearchBar 
                    loading={loading}
                    onPressSearch={this.onPressSearch}
                />
                <VideoList videos={videos} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    
})