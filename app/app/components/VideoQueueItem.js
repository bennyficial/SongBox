import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI';

const VideoQueueItem = ({ video }) => {
    return (
        <View>
            <Text>{video.title}</Text>
        </View>
    )
}

export default VideoQueueItem;

