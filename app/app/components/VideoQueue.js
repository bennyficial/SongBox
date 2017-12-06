import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import VideoQueueItem from './VideoQueueItem'
import { Header } from './index';


const VideoQueue = ({ videos }) => {

    let counter = 1;

    const queueItems = videos.map(video => (
        <VideoQueueItem 
            key={video._id}
            video={video} 
            counter={counter++}
        />
    ))

	return (
        <ScrollView style={{marginTop: 20}}>
            <Header headerText={'VIDEO QUEUE'} />
            <View style={styles.containerStyle}>
               {queueItems}
            </View>
        </ScrollView>
	);
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10,

    }
});

export { VideoQueue };