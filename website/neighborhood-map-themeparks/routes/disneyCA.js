var express = require('express');
var router = express.Router();
// include the Themeparks library
var ThemeParks = require('themeparks');


// access a specific park
var disneyCA = new ThemeParks.Parks.DisneylandResortCaliforniaAdventure();

let rideArray = []

// access wait times by Promise
disneyCA.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(ride of rides) {
      if (ride.active === true) {
        ride
      }
      rideArray.push(ride)
    }
}, console.error);

/* GET California Adventure Rides. */
router.get('/', function(req, res, next) {
  res.json(rideArray);
});

module.exports = router;
