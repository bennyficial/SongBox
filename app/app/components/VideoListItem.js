import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI'

const VideoListItem = ({ video }) => {
	const { imageStyle, textStyle, containerStyle, buttonStyle } = styles;

	addToPlayList = (song) => {
		// console.log(song)
		API.addSong(song)
	}
	goToList = () => {
		this.props.navigate('List')
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
				onPress={() => this.addToPlayList({title: video.snippet.title, source: video.id.videoId})}
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