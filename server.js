// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


var unirest = require('unirest');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

router.get('/', function(req, res) {
    res.sendfile('public/views/index.html');
});

router.get('/spark_temp', function(req, res){
  unirest.get('https://api.spark.io/v1/devices/'+process.env.SPARK_ID+'/temperature?access_token='+process.env.SPARK_AUTH).end(function(data){
      res.json(data)
  })
})

router.post('/spark_up'), function(req, res){
  res.json("{message: you called the up function but it's not implemented yet!}")
}

router.post('/spark_down'), function(req, res){
  res.json("{message: you called the down function but it's not implemented yet!}")
}

router.get('/intel_api', function(req, res){
  unirest.get('http://api.wunderground.com/api/'+process.env.INTEL_API_KEY+'/conditions/q/CA/San_Francisco.json').end(function(data){
    res.send(data)
  })
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);
