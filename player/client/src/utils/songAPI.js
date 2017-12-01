import axios from 'axios'

export default {
  // Gets all books
  getSong: function (song) {
    return axios.get('/api/songs/' + song)
  },
  addSong: function(song) {
    return axios.post('/api/new', song)
  },
  searchSong: function(song) {
    return axios.post('/api/search/' + song)
  },
  showSong: function(song) {
    // console.log(song)
    return axios.post('/api/saved', song)
  },
  recentSong: function() {
    // console.log(song)
    return axios.get('/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    return axios.get('/api/delete')
  }
}
