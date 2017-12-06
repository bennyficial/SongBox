import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
// import { Header } from '../components';
import { VideoQueue } from '../components';
import API from '../../api/songAPI';


export default class List extends React.Component {

    state = {
        videos: [],
        current: '',
    }

    // load list data here
    componentDidMount () {
        this.fetchListFromServer ()
    }

    // search = term => {
    //     this.setState({ loading: true });
    //     const searchTerm = term.toLowerCase().replace(' ', '+');
        
    //     API.searchSong(searchTerm)
    //         .then(res => {
    //             this.setState({ 
    //                 loading: false,
    //                 videos: JSON.parse(res.data).items
    //             })
    //             // console.log(this.state.videos)
    //         })
    //         .catch(err => console.log(err))
    // }

    fetchListFromServer = () => {
        API.showSong()
            .then(res => {
                this.setState({
                    videos: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

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
        const { videos } = this.state;
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#26232E'}}>
                {/* <Text style={{color: 'white'}}> LISTLIST </Text> */}
                <VideoQueue videos={videos} />
            </View>
        )
    }
}