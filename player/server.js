const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const morgan = require("morgan")

const PORT = process.env.PORT || 3001;
const app = express();
const Customers = require("./client/models/Customers")

var router = require('./services/router');

let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/songbox'

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_LOCAL_URL) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan('combined'));
app.use(express.static('client'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use('/v1', router);

app.get("/api/saved", function (req, res) {
  
  Customers
      .find({}).sort({date:-1})
      .exec(function (err, doc) {
  
          if (err) {
              console.log(err);
          } else {
              res.send(doc);
          }
      });
});

require('./controllers/songController.js')(app)



// Send every request to the React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
