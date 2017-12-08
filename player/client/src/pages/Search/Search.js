import React, { Component } from 'react'
import API from '../../utils/songAPI.js'
import NAV from '../../components/Nav'

class Search extends Component {
  state = {
    foundResult: '',
    artist: '',
    title: '',
    source: ''
  }

  searchSong () {
    const artist = (this.state.artist).toLowerCase().replace(' ', '+')

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

    API.deleteSong()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  addToPlayList = (song) => {
    API.addSong(song)
  }

  render () {
    return (
      <div className='text-center'>
      <NAV />
        <h1> Owners Search </h1>
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
                        onClick={() => this.addToPlayList({title: song.snippet.title, source: song.id.videoId, thumbnail: song.snippet.thumbnails.default.url})}
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
         >displaySong
        </button>
      </div>
    )
  }
}

export default Search
