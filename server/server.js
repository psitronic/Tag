// init project
//const stitch = require("mongodb-stitch"),
//      mongo = require('mongodb').MongoClient;

var bodyParser = require('body-parser');
var path = require('path');
var express = require('express'),
    app = express(),
    session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require("mongoose");
var User = require('./user/user');
var routes = require('./router/router');
      
// connect to mongoDB
var mongoDB = 'mongodb://user1:test@ds163667.mlab.com:63667/tag';   
mongoose.connect(mongoDB, {useMongoClient: true});
var db = mongoose.connection;
      
// create a session with a session ID
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
  mongooseConnection: db
  })
}));
      
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
      
app.use('/', routes);      
  
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//trydb();

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


function tryMlab(){
  
     mongo.connect(process.env.DBURL, function(er, db){
           if (er) {throw er
           } else {
             
             //console.log("db", db)
             
             db.collection('users').find({}).toArray(function(er, docs){
                   if (er) {throw er
                   } else { 
                         
                         console.log('docs', docs);
                         
                         db.close();
                   }
                 
             })
           }
       
     })   
  
}

mongooseMlab();

function mongooseMlab() {
  
User.find({},function(error, docs) {
  if (error) throw error;
    console.log(docs);
  });
}