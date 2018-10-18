var express = require('express');
var router = express.Router();
// include the Themeparks library
var ThemeParks = require('themeparks');


// access a specific park
var disneyland = new ThemeParks.Parks.DisneylandResortMagicKingdom();

let rideArray = []

// access wait times by Promise
disneyland.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(ride of rides) {
      if (ride.active === true) {
        ride
      }
      rideArray.push(ride)
    }
}, console.error);

/* GET Disneyland Rides. */
router.get('/', function(req, res, next) {
  res.json(rideArray);
});

module.exports = router;
