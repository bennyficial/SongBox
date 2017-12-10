import axios from 'axios'

const BOBA = 'https://bobatime.herokuapp.com'
const LOCAL = 'http://localhost:3000'
const HEROKU = 'https://songbox-server.herokuapp.com'

const SONGBOXX = 'https://songboxx.herokuapp.com'
export default {
  // Gets all books
  getSong: function (song) {
    return axios.get(SONGBOXX+'/api/songs/' + song)
  },
  addSong: function(song) {
    return axios.post(SONGBOXX+'/api/new', song)
  },
  searchSong: function(song) {
    return axios.post(SONGBOXX+'/api/search/' + song)
  },
  showSong: function() {
    // console.log(song)
    return axios.get(SONGBOXX+'/api/saved')
  },
  recentSong: function() {
    // console.log(song)
    return axios.get(SONGBOXX+'/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    return axios.get(SONGBOXX+'/api/delete')
  }
}