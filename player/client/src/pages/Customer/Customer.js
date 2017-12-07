import React, { Component } from 'react'
import API from '../../utils/songAPI.js'

class Customer extends Component {
  state = {
    foundResult: '',
    artist: '',
    title: '',
    source: ''
  }

  searchSong () {
    const artist = (this.state.artist).toLowerCase().replace(' ', '+')
    console.log(artist);
    API.searchSong(artist)
      .then(res => this.setState({ foundResult: JSON.parse(res.data) }))
      .catch(err => console.log(err))

   this.setState({artist: ''})

  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault()

  }  

  displaySong () {
    console.log(this.state.foundResult)
    //tile of the song
    // console.log(this.state.foundResult.items[0].snippet.title)
    //regular size thumbnail
    // console.log(this.state.foundResult.items[0].snippet.thumbnails.medium.url)
    //smaller thumbnail
    // console.log(this.state.foundResult.items[0].snippet.thumbnails.default.url)    
    //video source
    // console.log(this.state.foundResult.items[0].id.videoId)

    // console.log(process.env)
    // API.showSong({"song": "Don't Look Down"}).then(res => console.log(res))
    // .catch(err => console.log(err))
      //  .catch(err => console.log(err))

    // API.recentSong().then(res => console.log(res.data)).catch(err => console.log(err))
  }

  addToPlayList = (song) => {
    // console.log(song)
    API
      .addSong(song)
      // .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='text-center'>
        <h1> Customer </h1>
        <input 
          value={this.state.artist}
          onChange={this.handleInputChange}
          name='artist'
          placeholder="Bruno Mars"
          type="text"
          className="form-control"
          required
        />
        <button
         onClick={() => this.searchSong()}
         >Find Song
        </button>
        <div className="list-overflow-container">
        <ul className="list-group">
            {!this.state.foundResult.items ? <h1>Search for something</h1> : 
              this.state.foundResult.items.map(song => 
                <li className="list-group-item" key={song.snippet.title}>
                    <p>{song.snippet.title}
                      <img 
                        src={song.snippet.thumbnails.default.url} 
                        alt='thumbnail' 
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => this.addToPlayList({title: song.snippet.title, source: song.id.videoId})}
                        >Add
                      </button>
                    </p>
                </li>
              )
            }
          </ul>  
        </div>
        <button
         onClick={() => this.displaySong()}
         >Display Song
        </button>
      </div>
    )
  }
}

export default Customer
