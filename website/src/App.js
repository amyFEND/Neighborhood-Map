import React, { Component } from 'react'
import MapContainer from './MapContainer'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.css'
import './Responsive.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isHidden: true,
      query: '',
      multiple: false,
      rides: [
              { title: "Peter Pan's Flight", location: {lat: 33.813126, lng: -117.91888}, park: 'Disneyland', land: 'Fantasyland', height: [''], type: ['Small Drops', 'Slow Rides', 'Dark', 'Loud', '1955 Original Ride', 'Indoor'], fastpass: false, id: 'ChIJ0310NdHX3IARyeJ2xX2LRyY' },
              { title: 'Buzz Lightyear Astro-Blasters', location: {lat: 33.812196, lng: -117.91799}, park: 'Disneyland', land: 'Tomorrowland', height: [''], type: ['Slow Rides', 'Spinning', 'Dark', 'Loud', 'Indoor', 'Interactive'], fastpass: true, id: 'ChIJ0ytGJ9HX3IAR1FJWOr-ShV0' },
              { title: 'Star Tours', location: {lat: 33.811883, lng: -117.917963}, park: 'Disneyland', land: 'Tomorrowland', height: ['40', '102'], type: ['Small Drops', 'Thrill Rides', 'Dark', 'Loud', 'Indoor'], fastpass: true, id: 'ChIJeUNI2dDX3IARa_6z4I7tImM' },
              { title: 'Autopia', location: {lat: 33.812567, lng: -117.916366}, park: 'Disneyland', land: 'Tomorrowland', height: ['32', '81'], type: ['Slow Rides', 'Loud', '1955 Original Ride', 'Interactive'], fastpass: false, id: 'ChIJre8xANHX3IAR4lFwA-rZLj4' },
              { title: 'Space Mountain', location: {lat: 33.81138, lng: -117.917307}, park: 'Disneyland', land: 'Tomorrowland', height: ['40', '102'], type: ['Small Drops', 'Thrill Rides', 'Dark', 'Loud', 'Scary', 'Indoor'], fastpass: true, id: 'ChIJT8tp6dDX3IARDaf9VUMefl0' },
              { title: 'Haunted Mansion', location: {lat: 33.811723, lng: -117.922184}, park: 'Disneyland', land: 'New Orleans Square', height: [''], type: ['Slow Rides', 'Dark', 'Loud', 'Scary', 'Indoor'], fastpass: true, id: 'ChIJ5XV8V9bX3IARbDoMuumPNq0' },
              { title: 'Pirates of the Caribbean', location: {lat: 33.811254, lng: -117.920785}, park: 'Disneyland', land: 'New Orleans Square', height: [''], type: ['Small Drops', 'Slow Rides', 'Water Rides', 'Dark', 'Loud', 'Scary', 'Indoor'], fastpass: false, id: 'ChIJez76HtfX3IARglmSgm8wOvY' },
              { title: 'The Many Adventures of Winnie the Pooh', location: {lat: 33.812525, lng: -117.923135}, park: 'Disneyland', land: 'Critter Country', height: [''], type: ['Slow Rides', 'Dark', 'Loud', 'Indoor'], fastpass: false, id: 'ChIJIcgMaNbX3IARMEZTBjZIDR8' },
              { title: 'Matterhorn Bobsleds', location: {lat: 33.81307, lng: -117.91782}, park: 'Disneyland', land: 'Fantasyland', height: ['42', '107'], type: ['Small Drops', 'Thrill Rides', 'Water Rides', 'Dark', 'Loud', 'Scary'], fastpass: true, id: 'ChIJ1fghPNHX3IARNCJ07weBm68' },
              { title: 'Big Thunder Moutnain Railroad', location: {lat: 33.812521, lng: -117.920444}, park: 'Disneyland', land: 'Frontierland', height: ['40', '102'], type: ['Small Drops', 'Thrill Rides', 'Dark', 'Loud'], fastpass: true, id: 'ChIJkYhIwNbX3IARFRPbmix5YI8' },
              { title: 'Jungle Cruise', location: {lat: 33.811437, lng: -117.919952}, park: 'Disneyland', land: 'Adventureland', height: [''], type: ['Slow Rides', 'Water Rides', 'Loud', '1955 Original Ride'], fastpass: false, id: 'ChIJI2dYJtfX3IARmkrrVy2MgEI' },
              { title: 'Indiana Jones Adventure', location: {lat: 33.811349, lng: -117.920424}, park: 'Disneyland', land: 'Adventureland', height: ['46', '117'], type: ['Small Drops', 'Thrill Rides', 'Dark', 'Loud', 'Scary', 'Indoor'], fastpass: true, id: 'ChIJYfe3GNfX3IAR_H81DtmkMPo' },
              { title: "Soarin' Around the World", location: {lat: 33.808396, lng: -117.919971}, park: 'Disney California Adventure', land: 'Grizzly Peak', height: ['40', '102'], type: ['Small Drops', 'Slow Rides', 'Dark', 'Loud', 'Indoor'], fastpass: true, id: 'ChIJpVPw7tnX3IARcT0OcqyxKro' },
              { title: 'Grizzly River Run', location: {lat: 33.807548, lng: -117.920845}, park: 'Disney California Adventure', land: 'Grizzly Peak', height: ['42', '107'], type: ['Small Drops', 'Thrill Rides', 'Water Rides', 'Spinning'], fastpass: true, id: 'ChIJx7RWv9nX3IARJ5l8-jFv0tc' },
              { title: "Ariel's Undersea Adventure", location: {lat: 33.806349, lng: -117.921259}, park: 'Disney California Adventure', land: 'Paradise Gardens Park', height: [''], type: ['Slow Rides', 'Dark', 'Loud', 'Indoor'], fastpass: false, id: 'ChIJF_SqqdnX3IARbrfcackf3ok' },
              { title: "Goofy's Sky School", location: {lat: 33.806258, lng: -117.92277}, park: 'Disney California Adventure', land: 'Paradise Gardens Park', height: ['42', '107'], type: ['Small Drops', 'Thrill Rides', 'Loud'], fastpass: true, id: 'ChIJ-dlUQ9jX3IARSuuok0tq48g' },
              { title: 'Toy Story Midway Mania', location: {lat: 33.80459, lng: -117.921658}, park: 'Disney California Adventure', land: 'Pixar Pier', height: [''], type: ['Dark', 'Loud', 'Indoor', 'Interactive'], fastpass: true, id: 'ChIJO1Un79jX3IARePzk5hQD0kg' },
              { title: 'Incredicoaster', location: {lat: 33.804619, lng: -117.920656}, park: 'Disney California Adventure', land: 'Pixar Pier', height: ['48', '122'], type: ['Big Drops', 'Thrill Rides', 'Loud', 'New'], fastpass: true, id: 'ChIJ_SkO-snX3IARQgRfdNnQVEI' },
              { title: "Mater's Junkyard Jamboree", location: {lat: 33.806489, lng: -117.919153}, park: 'Disney California Adventure', land: 'Cars Land', height: ['32', '81'], type: ['Spinning'], fastpass: false, id: 'ChIJmW1GftnX3IARWvHgfpJ7Lek' },
              { title: 'Radiator Springs Racers', location: {lat: 33.805188, lng: -117.918657}, park: 'Disney California Adventure', land: 'Cars Land', height: ['40', '102'], type: ['Small Drops', 'Thrill Rides', 'Dark', 'Loud'], fastpass: true, id: 'ChIJDZni3dvX3IAR-UgkGaAmzJA' }
            ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.markerClicked = this.markerClicked.bind(this);
    this.infoWinClicked = this.infoWinClicked.bind(this);
    /* ** Code for dropdown filter - work in progress **
      ** TODO: get dropdown to filter rides list and markers **
    */
    // this.checked = this.checked.bind(this);
    // this.filterItems = this.filterItems.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  markerClicked = (ride) => {
    this.setState({ query: ride.title })
    this.setState({ isHidden: !this.state.isHidden })
  }

  infoWinClicked = (ride) => {
    this.setState({ query: ride.title })
    this.setState({ isHidden: !this.state.isHidden })
  }

  updateQuery = (query) => {
    this.setState({ query })
    if (query === '') {
      this.setState( { isHidden: true })
    }
  }

  clearQuery = (query) => {
    this.setState({ query: '' })
    this.setState({ isHidden: true})
  }

    /* ** Code for dropdown filter - work in progress **
      ** TODO: get dropdown to filter rides list and markers **
    */
    // checked = (e) => {
    //   this.setState({multiple: e.target.value});
    // }
    // filterItems = (val, type) => {
    //    switch (type) {
    //     case 'park':
    //       this.setState({park: val});
    //       break;
    //     default:
    //       break;
    //   }
    // }

  render() {
    const { rides, query } = this.state
    let hamburgerClass = this.state.isToggleOn ? 'hamburger-open visible' : 'hamburger-close visible'
    let sidebarToggle = this.state.isToggleOn ? false : true
    let filteredRides

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredRides = rides.filter((ride) => match.test(ride.title))
    } else {
      filteredRides = rides
    }
    filteredRides.sort(sortBy('title'));

    /* ** Code for dropdown filter - work in progress **
      ** TODO: get dropdown to filter rides list and markers **
    */
    // let filteredItems = this.state.rides;
    // let state = this.state;
    // let filterProperties = ["park"];
    // filterProperties.forEach(function(filterBy) {
    //   let filterValue = state[filterBy];
    //   if (filterValue) {
    //     filteredItems = filteredItems.filter(function(item) {
    //       return item[filterBy] === filterValue;
    //     });
    //   }
    // });
    // let parkArray = rides.filter((i, index) => (index < 2)).map(function(item) { return item.park });
    //     parkArray.sort(sortBy(''));
    //     parkArray.unshift("");

    return (
      <div className="App">
        <button
          className={hamburgerClass}
          onClick={this.handleClick}
        >&#x2630;</button>

        <Navigation />

        <Sidebar
          isToggleOn={sidebarToggle}
          rides={rides}
          filteredRides={filteredRides}
          query={query}
          updateQuery={this.updateQuery}
          clearQuery={this.clearQuery}
          infoWinClicked={this.infoWinClicked}
          isHidden={this.state.isHidden}
          /* ** Code for dropdown filter - work in progress **
            ** TODO: get dropdown to filter rides list and markers **
          */
          // data={rides}
          // parkOptions={parkArray}
          // changeOption={this.filterItems}
          // filteredItems={filteredItems}
        />

        <MapContainer
          rides={rides}
          filteredRides={filteredRides}
          markerClicked={this.markerClicked}
        />
      </div>
    );
  }
}

export default App
