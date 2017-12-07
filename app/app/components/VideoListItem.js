import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';
import API from '../../api/songAPI';
import Modal from 'react-native-modal';


class VideoListItem extends React.Component {
	state = {
		isModalVisible: false
	}

	_renderButton = (text, onPress) => (
		<TouchableOpacity onPress={onPress}>
		  <View style={styles.button}>
			<Text>{text}</Text>
		  </View>
		</TouchableOpacity>
	  );
	
	_renderModalContent = (title) => (
		<View style={styles.modalContent}>
			<Text style={{fontSize: 15, fontWeight: '700'}}>{title}</Text>
			<Text style={{fontSize: 13}}>is added to a queue</Text>
			{this._renderButton('Close', this._onPressModalButton)}
		</View>
	);

	_onPressModalButton = () => {
		this.setState({isModalVisible: false})
		setTimeout(() => {
			oBP();
		}, 650)
	}

	_addToPlayList = (song) => {
		this.setState({isModalVisible:true})
		API.addSong(song);
	}

	render() {
		const { imageStyle, textStyle, containerStyle, buttonStyle, button, modalContent } = styles;
		const { video, oBP } = this.props;		
		return(
			<View style={containerStyle}>
				<Image 
					style={imageStyle}
					source={{ uri: video.snippet.thumbnails.medium.url }}
				/>
				<Text style={textStyle}>{video.snippet.title}</Text>
				<Button block iconLeft
					style={buttonStyle}
					onPress={() => 	this._addToPlayList({title: video.snippet.title, source: video.id.videoId, thumbnail: video.snippet.thumbnails.default.url})}
				>
					<Icon active name='md-musical-note' />
					<Text style={{color: 'white'}}> ADD </Text>
				</Button>
				<Modal
					isVisible={this.state.isModalVisible}
					style={styles.bottomModal}
				>
          			{this._renderModalContent(video.snippet.title)}
       			</Modal>
			</View>
		)
	}
}

// const VideoListItem = ({ video, oBP }) => {
// 	const { imageStyle, textStyle, containerStyle, buttonStyle } = styles;
	
// 	showAlert = (title, msg) => {
// 		Alert.alert(
// 			' ',
// 			'Successfully added to the playlist',
// 			[
// 				{text: 'Got it', onPress: () => this.goToListOnPress}
// 			]
// 		);
// 	}
	
// 	addToPlayList = (song) => {
// 		API.addSong(song);
// 		// showAlert();
// 		this.oBP()
// 	}
//     return (
//     	<View style={containerStyle}>
//     	    <Image 
//                 style={imageStyle}
//                 source={{ uri: video.snippet.thumbnails.medium.url }}
//     	    />
//     	    <Text style={textStyle}>{video.snippet.title}</Text>
// 			<Button block iconLeft
// 				style={buttonStyle}
// 				onPress={() => addToPlayList({title: video.snippet.title, source: video.id.videoId, thumbnail: video.snippet.thumbnails.default.url})}
// 			>
// 				<Icon active name='md-musical-note' />
// 				<Text style={{color: 'white'}}> ADD </Text>
// 			</Button>
//     	</View>
//     );
// }

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
	},
	button: {
		backgroundColor: 'lightblue',
		padding: 12,
		margin: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	  },
	  modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	  },
	  bottomModal: {
		justifyContent: 'flex-end',
		margin: 0,
	  },
}

export default VideoListItem;