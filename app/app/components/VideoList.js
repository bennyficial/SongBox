import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import {Button} from 'native-base';
import VideoListItem from './VideoListItem'


const VideoList = ({ videos, onButtonPress }) => {
    oBP = () => {
        onButtonPress();
    }
    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.id.videoId}
            video={video}
            oBP={this.oBP}
        />
    ));

	return (
        <ScrollView style={{marginTop: 20}}>
            <View style={styles.containerStyle}>
                {videoItems}
            </View>
        </ScrollView>
	);
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});

export { VideoList };