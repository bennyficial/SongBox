import axios from 'axios'

export default {
  
  getSong: function (song) {
    //this is default JSON
    return axios.get('/api/songs/' + song)
  },
  addSong: function(song) {
    //add song to database
    return axios.post('/api/new', song)
  },
  searchSong: function(song) {
    // youtube search
    return axios.post('/api/search/' + song)
  },
  showSong: function() {
    // console.log(song)
    //get all results of the database
    return axios.get('/api/saved')
  },
  recentSong: function() {
    // console.log(song)
    // get next song
    return axios.get('/api/recent')
  },
  deleteSong: function() {
    // console.log(song)
    //delete song next song
    return axios.get('/api/delete')
  },
  ownerDelete: function(song) {
    return axios.post('/api/remove', song)
  },
  testing: function(song) {
    return axios.get('https://www.googleapis.com/youtube/v3/videos?key=-ZUhbdkBgA&part=snippet,contentDetails')
  }

}
