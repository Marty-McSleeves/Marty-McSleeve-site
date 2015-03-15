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

// https://api.github.com/zen

// var http = require('http');

// //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
// var options = {
//   host: 'www.api.github.com',
//   path: '/zen'
// };

// callback = function(response) {
//   var str = '';

//   //another chunk of data has been recieved, so append it to `str`
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   //the whole response has been recieved, so we just print it out here
//   response.on('end', function () {
//     console.log(str);
//   });

//   response.on('error', function(error){
//     console.log(error)
//   })
// }

// console.log(http.request(options, callback).end());

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// // router.get('/', function(req, res) {
// //     res.json({ message: 'hooray! welcome to our api!' });
// // });

// router.get('/', function(req, res) {
//     res.sendfile('public/views/index.html');
// });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);