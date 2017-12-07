import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI';


const VideoListItem = ({ video, oBP }) => {
	const { imageStyle, textStyle, containerStyle, buttonStyle } = styles;
	
	showAlert = (title, msg) => {
		Alert.alert(
			' ',
			'Successfully added to the playlist',
			[
				{text: 'Got it', onPress: () => this.goToListOnPress}
			]
		);
	}
	
	addToPlayList = (song) => {
		API.addSong(song);
		// showAlert();
		this.oBP()
	}
    return (
    	<View style={containerStyle}>
    	    <Image 
                style={imageStyle}
                source={{ uri: video.snippet.thumbnails.medium.url }}
    	    />
    	    <Text style={textStyle}>{video.snippet.title}</Text>
			<Button block iconLeft
				style={buttonStyle}
				onPress={() => addToPlayList({title: video.snippet.title, source: video.id.videoId, thumbnail: video.snippet.thumbnails.default.url})}
			>
				<Icon active name='md-musical-note' />
				<Text style={{color: 'white'}}> ADD </Text>
			</Button>
    	</View>
    );
}

//video.snippet.thumbnails.default.url
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