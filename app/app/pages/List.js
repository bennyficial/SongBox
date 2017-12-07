import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
// import { Header } from '../components';
import { VideoQueue } from '../components';
import API from '../../api/songAPI';


export default class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            current: '',
            added: false
        }
    }
    

    // load list data here
    componentDidMount () {
        this.fetchListFromServer ()
        // setInterval(() =>{
        //     console.log('FETCH')
        //     this.fetchListFromServer ()
        // }, 5000 )
    }

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
        headerLeft: null,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon active name='md-search' style={{fontSize: 28, color: 'white', paddingRight: 10}}/>
            </TouchableOpacity>
        )
    })

    render () {
        const { videos } = this.state;
        return (
            <View style={{flex:1, backgroundColor: '#26232E'}}>
                {/* <Text style={{color: 'white'}}> LISTLIST </Text> */}
                <VideoQueue videos={videos}/>
            </View>
        )
    }
}