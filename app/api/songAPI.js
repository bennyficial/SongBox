import axios from 'axios'

const BOBA = 'https://bobatime.herokuapp.com'
const LOCAL = 'http://localhost:3000'
const HEROKU = 'https://songbox-server.herokuapp.com'
export default {
  // Gets all books
  getSong: function (song) {
    return axios.get(HEROKU+'/api/songs/' + song)
  },
  addSong: function(song) {
    return axios.post(HEROKU+'/api/new', song)
  },
  searchSong: function(song) {
    return axios.post(HEROKU+'/api/search/' + song)
  },
  showSong: function() {
    // console.log(song)
    return axios.get(HEROKU+'/api/saved')
  },
  recentSong: function() {
    // console.log(song)
    return axios.get(HEROKU+'/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    return axios.get(HEROKU+'/api/delete')
  }
}