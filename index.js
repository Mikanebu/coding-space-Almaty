let express = require('express')
let app = express()
let things = require('./things.js')
let bodyParser = require('body-parser')
let bodyParser = require('cookie-parser')

app.use(cookieParser())
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});
app.use('/things', things);
//both index.js and things.js should be in same directory
app.get('/check/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);