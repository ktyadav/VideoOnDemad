var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://ktyadav:kt%406233@ds159377.mlab.com:59377/complain-me', (err, database) => {
	
	if(err) return console.log(err)
		
	db = database
	
	app.listen(9090, function(){
		console.log('listening on port 9090')
	})	
})

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

     // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.post('/history', (req, res) => {
  console.log(req.body);
  db.collection('videoHistory').save(req.body, (err, result) => {
	  if(err) console.log(err)

	  console.log('data saved')
	  res.end();
  })
})

app.get('/history/:id', (req, res) => {
  var id = req.params.id;
  db.collection('videoHistory').find({"userId":id}).toArray(function(err,results){
    if(err) console.log(err);
	   console.log(results);
	   res.send(results);
  })
 
})

app.get('/history/:userId/:videoId', (req, res) => {
  var userId = req.params.userId;
  var videoId = req.params.videoId;
  console.log("user id: "+userId);
  console.log("video id"+videoId);
  db.collection('videoHistory').find({$where:[{"userId":userId},{"videoId":videoId}]}).toArray(function(err,results){
    if(err) console.log(err);
	   console.log(results);
	   res.send(results);
  })
 
})
