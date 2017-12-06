import React from 'react';
import { View, Text, Image, } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI';

const VideoQueueItem = ({ video, counter }) => {
    let titleArray = video.title.split('-');
    let artist = titleArray[0];
    let song = titleArray[1];
    console.log('artist: ' + artist);
    console.log('song: ' + song);

    const { containerStyle, songContainerStyle, indexContainerStyle } = styles
    return (
        <View style={containerStyle}>
            <View style={indexContainerStyle}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{counter} </Text>
            </View>
            <View style={songContainerStyle}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15, marginBottom: 3}}>{song}</Text>
                <Text style={{color: 'white', marginLeft: 2}}>{artist}</Text>
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15
    },
    songContainerStyle: {
        flexDirection: 'column'
    },
    indexContainerStyle: {
        marginRight: 15
    }
}


export default VideoQueueItem;

