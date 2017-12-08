import React, { Component } from 'react'
import API from '../../utils/songAPI.js'
import NAV from '../../components/Nav'

class Playlist extends Component {
  state = {
    foundResult: '',
    title: '',
    source: '',
    thumbnail: '',
    _id: ''
  }

  componentDidMount() {
      this.searchDatabaseList()
  }

  searchDatabaseList () {

    API
      .showSong()
      .then(res => this.setState({ foundResult: res.data }))
      .catch(err => console.log(err))

  }

  displaySong () {
    // console.log(this.state.foundResult)
    // console.log(this.state.foundResult[0])
    // console.log(this.state.foundResult[0].title)
    // console.log(this.state.foundResult[0].source)
    // console.log(this.state.foundResult[0].thumbnail)   
    // console.log(this.state.foundResult[0]._id)       
    // API.testing()
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
  }

  deleteSongFromList = (song) => {
    // console.log(song)
    API.ownerDelete(song)
       
    window.location.reload()
  }

  render () {
    return (
      <div className='text-center'>
      <NAV />
        <h1> Customers Playlist </h1>
        <div className="list-overflow-container">
        <ul className="list-group">
            {!this.state.foundResult ? <h1>Nothing is in your playlist</h1> : 
              this.state.foundResult.map(song => 
                <li className="list-group-item" key={song._id}>
                    <p>{song.title}
                      <img 
                        src={song.thumbnail} 
                        alt='thumbnail' 
                      />
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteSongFromList({id: song._id})}
                        >X
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

export default Playlist
