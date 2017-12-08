import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import API from '../../utils/songAPI.js'

// const backImage1 = {
//   backgroundRepeat: 'no-repeat',
//   backgroundImage: 'cover', 
//   // eslint-disable-next-line
//   backgroundImage: 'url(./src/assets/images/iHeartTea.jpg)'
// }

// const backImage2 = {
//   backgroundRepeat: 'no-repeat',
//   backgroundImage: 'cover', 
//   // eslint-disable-next-line
//   backgroundImage: 'url(./src/assets/images/suckmy.jpg)'
// }

const youTube = 'https://www.youtube.com/watch?v='
// var list = ['wIft-t-MQuE', '2Vv-BfVoq4g', 'nJSdYlAFKqA']

class Main extends Component {
   state = {
    url: null,
    num: 1,
    playing: true,
    checkerURL: null
   }

   componentDidMount () {
    // this.setState({url: youTube + "0XFudmaObLI"}) 
    this.nextSong()
   }

   nextSong () {

    API.recentSong()
    // .then(({ data }) => console.log(data))
    .then(({ data }) => this.setState({checkerURL: data.source}))
    .catch(err => console.log(err))

    setTimeout(() => {
    
      //check if there is something on the Customers DB
      if (this.state.checkerURL) {

        //load the customers DB song
        this.setState({url: youTube + this.state.checkerURL})

        //delete the current song being played from DB
        API.deleteSong()
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err))    

      //if No songs are on the Customers DB
      } else {  
        
        // Then fall back to JSON file
        // TODO built a Owner's default list
        API.getSong(this.state.num)
        .then(({ data }) => this.setState({url: youTube + data.source, num: this.state.num + 1}))
        .catch(err => console.log(err))
        
        //Loops back to the beginning of the list
        if(this.state.num === 6) {
          this.setState({num: 1})
        }
      }

    }, 500);
        
   }

  //  testing () {

  //   async function f() {
      
  
  //       let something = await  API.getSong(this.state.num).then(({ data }) => this.setState({url: youTube + data.source, num: this.state.num + 1})).catch(err => console.log(err))

      
        
      
        
  //     }
      
  //     f();
      
  //  }

  render () {
    return (
      <div className='row'>
        {/* <div className='col-md-2' style={backImage1}>
        </div> */}
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
       
        {/* <div className='col-md-2' style={backImage2}>
        <div> <button onClick={() => this.testing()}>Console.log</button> </div>
        </div> */}
      </div>
    ) 
  }
}

export default Main
