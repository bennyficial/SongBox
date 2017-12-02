import axios from 'axios'


export default {
  // Gets all books
  getSong: function (song) {
    return axios.get('http://localhost:3000/api/songs/' + song)
  },
  addSong: function(song) {
    return axios.post('http://localhost:3000/api/new', song)
  },
  searchSong: function(song) {
    return axios.post('http://localhost:3000/api/search/' + song)
  },
  showSong: function(song) {
    // console.log(song)
    return axios.post('http://localhost:3000/api/saved', song)
  },
  recentSong: function() {
    // console.log(song)
    return axios.get('http://localhost:3000/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    return axios.get('http://localhost:3000/api/delete')
  }
}