var express = require('express')

var app = express();

var mongoClient=require('mongodb').MongoClient;
var mongoDbObj;

mongoClient.connect('mongodb://localhost/videoDb', function(err, db){
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected to MongoDB");
    app.listen(8081, ()=>{
        console.log('server is running on 8081');
    })
      mongoDbObj={db: db,
      videoHistory: db.collection('videoHistory')
    };
  }
});

app.post("save", function(req, res){
  var history = req.body;
  mongoDbObj.videoHistory.insert(history, function(err, result){
    if(err)
    {
      console.log('error occurs');
    } else{
      console.log('saved success');
    }

  })
});

app.get("/history/:userId", function(req, res){
  var id = req.params.userId;
  
})