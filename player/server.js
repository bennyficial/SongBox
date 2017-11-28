const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require("path");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

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
app.use(bodyParser.json());

app.use('/api', router);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
