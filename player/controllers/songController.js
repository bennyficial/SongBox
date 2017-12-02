var Customers = require('../client/models/Customers')
var request = require('request')
var songData = require('../data/data.json')

const YouTube_key = 'AIzaSyDwgRsgz8Fcl4OLOIsR3YEl6-ZUhbdkBgA'

module.exports = function (app) {
  // app.get('/api/songs/:id?', function (req, res) {
  //   var id = req.params.id

  //   if (id) {
  //     for (var i = 0; i < songData.length; i++) {
  //       if (id === songData[i].id) {
  //         return res.json(songData[i])
  //       }
  //     }
  //     return res.send('<h1>Song Not Found</h>')
  //   }
  //   return res.json(songData)
  // })


  app.post('/api/new', function (req, res) {
    Customers.create(req.body).then(res => console.log(res)).catch(err => console.log(err))
  })

  app.get('/api/recent', function (req, res) {

    Customers.findOne().sort({ field: 'asc', _id: 1 }).limit(1).then(data => res.send(data)).catch(err => console.log(err))
  })

  app.get('/api/delete', function (req, res) {
    
    Customers.findOne().sort({ field: 'asc', _id: 1 }).limit(1).then(res => res.remove(), res.send('deleted'))
  })

app.get('/api/songs/:id?', function (req, res) {
  var id = req.params.id

  if (id) {
    for (var i = 0; i < songData.length; i++) {
      if (id === songData[i].id) {
        return res.json(songData[i])
      }
    }
    return res.send('<h1>Song Not Found</h>')
  }
  return res.json(songData)
})

  app.post('/api/search/:song?', function (req, res) {
  //  console.log('this is process.env.YouTube_key  '+process.env.YouTube_key)
   if (req.params.song === undefined) {
    var youTube = 'bruno+mars'
   } else {
    var youTube = req.params.song 
   }
     
    request('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+youTube+'&type=video&videoCategoryId=10&videoDuration=short&fields=items(id(kind%2CvideoId)%2Csnippet(thumbnails%2Ctitle))&key='+ YouTube_key, function (error, response, body) {
      console.log('error:', error)
      console.log('statusCode:', response && response.statusCode) 
      return res.json(body)
    })


  })

}
