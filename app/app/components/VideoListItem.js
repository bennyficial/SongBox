import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';

const VideoListItem = ({ video }) => {
	const { imageStyle, textStyle, containerStyle, buttonStyle } = styles;
    return (
    	<View style={containerStyle}>
    	    <Image 
                style={imageStyle}
                source={{ uri: video.snippet.thumbnails.medium.url }}
    	    />
    	    <Text style={textStyle}>{video.snippet.title}</Text>
			<Button block iconLeft
				style={buttonStyle}
				onPress={() => console.log('AAADDDDDD')}
			>
				<Icon active name='md-musical-note' />
				<Text style={{color: 'white'}}> ADD </Text>
			</Button>
    	</View>
    );
}

const styles = {
	containerStyle: {
		marginTop: 50,
	},
	imageStyle: {
		alignSelf: 'stretch', 
		height: 180
	},
	textStyle: {
		fontSize: 18,
		color: '#fff',
		marginTop: 10,
		alignSelf: 'center'
	},
	buttonStyle: {
		marginTop: 20,
		backgroundColor: '#6A50A7'
	}
}

export default VideoListItem;