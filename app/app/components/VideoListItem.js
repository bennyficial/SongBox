import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoListItem = ({ video }) => {
	const { imageStyle, textStyle } = styles;
    return (
    	<View>
    	    <Image 
                style={imageStyle}
                source={{ uri: video.snippet.thumbnails.medium.url }}
    	    />
    	    <Text style={textStyle}>{video.snippet.title}</Text>
    	</View>
    );
}

const styles = {
	imageStyle: {
		alignSelf: 'stretch', 
		height: 180
	},
	textStyle: {
		fontSize: 20,
		color: '#fff'
	}
}

export default VideoListItem;