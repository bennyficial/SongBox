import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import VideoQueueItem from './VideoQueueItem'


const VideoQueue = ({ videos }) => {

    const queueItems = videos.map(video => (
        <VideoQueueItem 
            key={video._id}
            video={video} />
    ))

	return (
        <ScrollView style={{marginTop: 20}}>
            <View style={styles.containerStyle}>
               {queueItems}
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

export { VideoQueue };