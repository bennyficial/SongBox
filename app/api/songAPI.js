import axios from 'axios'

const BOBA = 'https://bobatime.herokuapp.com'
const LOCAL = 'http://localhost:3000'
export default {
  // Gets all books
  getSong: function (song) {
    return axios.get(LOCAL+'/api/songs/' + song)
  },
  addSong: function(song) {
    return axios.post(LOCAL+'/api/new', song)
  },
  searchSong: function(song) {
    return axios.post(LOCAL+'/api/search/' + song)
  },
  showSong: function(song) {
    // console.log(song)
    return axios.post(LOCAL+'/api/saved', song)
  },
  recentSong: function() {
    // console.log(song)
    return axios.get(LOCAL+'/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    return axios.get(LOCAL+'/api/delete')
  }
}