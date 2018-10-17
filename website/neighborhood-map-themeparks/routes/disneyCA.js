var express = require('express');
var router = express.Router();
// include the Themeparks library
var ThemeParks = require('themeparks');


// access a specific park
var disneyCA = new ThemeParks.Parks.DisneylandResortCaliforniaAdventure();

// access wait times by Promise
disneyCA.GetWaitTimes().then(function(ridesCA) {
  let rideWaitTimesCA
    // print each wait time
    for(ride of ridesCA) {
        let rideCA = console.log(ride.name + ": " + ride.waitTime + " minutes wait");
    }
}, console.error);

/* GET California Adventure Rides. */
router.get('/', function(req, res, next) {
  res.send('respond with DCA resource');
});

module.exports = router;
