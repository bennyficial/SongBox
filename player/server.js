const express = require('express'),
bodyParser = require("body-parser"),
Customers = require("./client/models/Customers"),
mongoose = require("mongoose"),
mongoUrl = "mongodb://localhost/week18day2",
path = require("path"),
PORT = process.env.PORT || 3001;
app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(express.static('client'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);

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

  const db = mongoose.connection;
  
  db.on("error", error => console.log("Database Error:", error));
  
  db.once("open", () => console.log("Mongoose connection successful."));

require('./controllers/songController.js')(app)
// Send every request to the React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
