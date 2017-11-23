// init project
const stitch = require("mongodb-stitch")
var express = require('express');
var app = express();


// use whatever libs or frameworks you'd like through `package.json`.


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/test", function(request, response) {
  
});

app.get("/login", function(request, response) {
        console.log("request.query", request.query)
  
        response.send('logged in')
        response.end()
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});




trydb();

function trydb(){
    //   stickertag@admin
    //  tag-mjydj
    
    const client = new stitch.StitchClient('tag-mjydj'); 
    //const db = client.service('mongodb', 'mongodb-atlas').db('tag1');
    const db = client.service('mongodb', 'mongodb-atlas').db('tag');
    //console.log(db);
    
     
     
    client.login()//.then(//() =>)
    .then(() =>
      //db.collection('users').insertOne({owner_id: client.authedId(), comment: "url4"})//.then()  
      //db.collection('users').insertOne({"name": "okram", "email":"okram@protonmail.ch",   "password": "test", "friends":[]})
      //db.collection('users').insertOne({"name": "otto",  "email": "lindrope@hotmail.com", "password": "test", "friends":[]})
      
      //  db.collection('url').insertOne({"url": "https://de.wikipedia.org/wiki/Falco", 'userIDs': {'ID_5a1718122d4a1c11c5973510':['5a17194f79e0fa0fc5bda1c3']  }  })
      //  db.collection('messages').insertOne({text: 'Falco is alive', userID:'5a1718122d4a1c11c5973510', url: "https://de.wikipedia.org/wiki/Falco"})
          
          
      db.collection('url').find({}).limit(100).execute()
          
      //  use this to delete all docs from specified collection          
      //  db.collection('url').deleteMany()     
          
    ).then(docs => {  
      console.log("Found this", docs)
      
      
      console.log("[MongoDB Stitch] Connected to Stitch")
    }).catch(err => {
      console.error(err)
    });
  
}
