var express = require('express');
var router = express.Router();
// include the Themeparks library
var ThemeParks = require('themeparks');


// access a specific park
var disneyland = new ThemeParks.Parks.DisneylandResortMagicKingdom();

// access wait times by Promise
disneyland.GetWaitTimes().then(function(rides) {
  let rideWaitTimes
    // print each wait time
    for(ride of rides) {
        console.log(ride.name + ": " + ride.waitTime + " minutes wait");
    }
}, console.error);

/* GET Disneyland Rides. */
router.get('/', function(req, res, next) {
  res.send('respond with Disneyland resource');
});

module.exports = router;
