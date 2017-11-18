import React, { Component } from 'react'
import ReactPlayer from 'react-player'


var youTube = 'https://www.youtube.com/watch?v='
var list = ['wIft-t-MQuE', '2Vv-BfVoq4g']

class App extends Component {
   state = {
    url: null,
    playing: true
   }

   componentDidMount () {
     this.setState({url: youTube + list[1]})
   }

   nextSong () {
     this.setState({url: youTube + list[0]})
   }

  render () {
    const { playing, loop } = this.state
    return (
    <div className='row'>
      <div className='col-lg-2'></div>
        <div className='col-lg-4'>
        <div className="row">
        <div className='col-lg-1'></div>
          <div className="col-lg-2">
      <ReactPlayer
        {...this.props}
        url={this.state.url}
        controls
        playing={playing}
        height= "540px"
        width= "960px"
        loop={loop}
        onEnded={() => this.nextSong()}
        />
      </div>
      </div>
      </div>
   
   
    
    </div>
    )
  }
}

export default App
