import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { Icon, Thumbnail } from 'native-base';
// import { Header } from '../components';
import { VideoQueue } from '../components';
import API from '../../api/songAPI';

// socket.io client side
// import SocketIOClient from 'socket.io-client';


export default class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            current: null,
            added: false,
            refresh: false,
            timerId: '',
        }
        
        // listen localhost
        // this.socket = SocketIOClient('http://localhost:3000');
        // this.socket.on('message', this._onReceivedMessage);
    }

    

    // load list data here
    componentDidMount () {
        this.fetchListFromServer ()
        
    }

    // _onReceivedMessage = (message) => {
    //     let currentSong = message;

    //     console.log('RECEIVED FROM SOCKET!!')
    //     console.log(currentSong)
    //     this.fetchListFromServer ()
    // }

    fetchListFromServer = () => {
        console.log('gg')
        API.showSong()
            .then(res => {
                this.setState({
                    videos: res.data
                })
            })
            .catch(err => {
                if (err) throw err
                console.log(err)
            })
    }

    // pickSong = () => {
    //     API.recentSong()
    //         .then(song => {
    //             // console.log('next song')
    //             // console.log(song.data)
    //             // this.setState({current: song.data})
    //             AsyncStorage.setItem('current', song.data);
    //         })
    //         .catch(err => {
    //             if (err) throw err;
    //             console.log(err);
    //         })
    // }

    onButtonPress = () => {
        this.fetchListFromServer ()
        // console.log(this.state.videos)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'List',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#26232E',
        },
        headerLeft: null,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon active name='md-search' style={{fontSize: 28, color: 'white', paddingRight: 10}}/>
            </TouchableOpacity>
        )
    })

    render () {
        const { videos, current } = this.state;
        // var width = Dimensions.get('window').width;

        // let artist = '';
        // let song = '';
        // let display = '';
        // if (current === null) {
        //     display = 'Welcome to SONGBOX!'
        // } else {
        //     let titleArray = current.title.split(/-|_/);
        //     if (titleArray.length === 2) {
        //         artist = titleArray[0];
        //         song = titleArray[1];
        //         display = song + ', ' + artist
        //     } else {
        //         song = titleArray[0]
        //         display = song
        //     }
        // }
       
                
        return (
            <View style={{flex:1, backgroundColor:'#26232E', flexDirection: 'column',
            justifyContent: 'space-between'}}>
                {/* <Text style={{color: 'white'}}> LISTLIST </Text> */}
                <VideoQueue videos={videos} onButtonPress={this.onButtonPress}/>
                {/* <View style={{
                        position: 'absolute', 
                        bottom: 0, 
                        width: '90%', 
                        backgroundColor: '#474057', 
                        alignItems: 'center',
                        marginBottom: 30,
                        alignSelf: 'center',
                        height: 80,
                        justifyContent: 'center',}}>
                        {
                            
                        }
                        <Text style={{fontWeight: 'bold'}}> {display} </Text>
                    
                </View> */}
            </View>
        )
    }
}
