import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import VideoListItem from './VideoListItem'


const VideoList = ({ videos }) => {

    const videoItems = videos.map(video => (
        <VideoListItem
            key={video.snippet.title}
            video={video}
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