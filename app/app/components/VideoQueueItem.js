import React from 'react';
import { View, Text, Image, } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI';

const VideoQueueItem = ({ video, counter }) => {

    let titleArray = video.title.split(/-|_/);
    let artist = '';
    let song = '';
    if (titleArray.length === 2) {
        artist = titleArray[0];
        song = titleArray[1];
    } else {
        song = titleArray[0]
    }
    
    console.log(' ')
    console.log('original: ' + video.title);
    console.log('artist: ' + artist);
    console.log('song: ' + song);
    

    const { containerStyle, songContainerStyle, indexContainerStyle } = styles
    return (
        <View style={containerStyle}>
            <View style={indexContainerStyle}>
                <Text style={{color: '#bababa', fontWeight: '800', fontSize: 16}}>{counter} </Text>
            </View>
            <View style={songContainerStyle}>
                <Text style={{color: '#E7E7E7', fontWeight: '800', fontSize: 16, marginBottom: 3}}>{song}</Text>
                <Text style={{color: '#bababa', marginLeft: 3}}>{artist}</Text>
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30
    },
    songContainerStyle: {
        flexDirection: 'column'
    },
    indexContainerStyle: {
        marginRight: 20
    }
}


export default VideoQueueItem;

