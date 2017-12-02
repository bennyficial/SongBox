import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import API from '../../utils/songAPI.js'

const backImage1 = {
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'cover', 
  // eslint-disable-next-line
  backgroundImage: 'url(./src/assets/images/iHeartTea.jpg)'
}

const backImage2 = {
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'cover', 
  // eslint-disable-next-line
  backgroundImage: 'url(./src/assets/images/suckmy.jpg)'
}

const youTube = 'https://www.youtube.com/watch?v='


class Owner extends Component {
   state = {
    url: null,
    num: 6,
    playing: true
   }

   componentDidMount () {
     this.startSong()
   }

   startSong () {
    this.setState({url: youTube + "EEuQU6a90Pc"})
   }


   nextSong () {

    API.recentSong().then(({ data }) => this.setState({url: youTube + data.source}))
    .catch(err => console.log(err))
    
    API.deleteSong().then(res => console.log(res)).catch(err => console.log(err))


   }

  render () {
    return (
      <div className='row'>
        <div className='col-md-2' style={backImage1}>
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-3'>
              <ReactPlayer
              url={this.state.url}
              height='560px'
              width='980px'
              controls
              playing={this.state.playing}
              onEnded={() => this.nextSong()}
              />
            </div>
          </div>
        </div>
        <div className='col-md-2' style={backImage2}>
        </div>
      </div>
    ) 
  }
}

export default Owner
