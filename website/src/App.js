import React, { Component } from 'react'
import MapContainer from './MapContainer'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import './App.css'
import './Responsive.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: true,
      rides: [
        {
          title: "Peter Pan's Flight",
          location: {lat: 33.813126, lng: -117.91888},
          park: 'Disneyland',
          id: 'ChIJ0310NdHX3IARyeJ2xX2LRyY'
        },
        {
          title: 'Buzz Lightyear Astro-Blasters',
          location: {lat: 33.812196, lng: -117.91799},
          park: 'Disneyland',
          id: 'ChIJ0ytGJ9HX3IAR1FJWOr-ShV0'
        },
        {
          title: 'Star Tours',
          location: {lat: 33.811883, lng: -117.917963},
          park: 'Disneyland',
          id: 'ChIJeUNI2dDX3IARa_6z4I7tImM'
        },
        {
          title: 'Autopia',
          location: {lat: 33.812567, lng: -117.916366},
          park: 'Disneyland',
          id: 'ChIJre8xANHX3IAR4lFwA-rZLj4'
        },
        {
          title: 'Space Mountain',
          location: {lat: 33.81138, lng: -117.917307},
          park: 'Disneyland',
          id: 'ChIJT8tp6dDX3IARDaf9VUMefl0'
        },
        {
          title: 'Haunted Mansion',
          location: {lat: 33.811723, lng: -117.922184},
          park: 'Disneyland',
          id: 'ChIJ5XV8V9bX3IARbDoMuumPNq0'
        },
        {
          title: 'Pirates of the Caribbean',
          location: {lat: 33.811254, lng: -117.920785},
          park: 'Disneyland',
          id: 'ChIJez76HtfX3IARglmSgm8wOvY'
        },
        {
          title: 'The Many Adventures of Winnie the Pooh',
          location: {lat: 33.812525, lng: -117.923135},
          park: 'Disneyland',
          id: 'ChIJIcgMaNbX3IARMEZTBjZIDR8'
        },
        {
          title: 'Matterhorn Bobsleds',
          location: {lat: 33.81307, lng: -117.91782},
          park: 'Disneyland',
          id: 'ChIJ1fghPNHX3IARNCJ07weBm68'
        },
        {
          title: 'Big Thunder Moutnain Railroad',
          location: {lat: 33.812521, lng: -117.920444},
          park: 'Disneyland',
          id: 'ChIJkYhIwNbX3IARFRPbmix5YI8'
        },
        {
          title: 'Jungle Cruise',
          location: {lat: 33.811437, lng: -117.919952},
          park: 'Disneyland',
          id: 'ChIJI2dYJtfX3IARmkrrVy2MgEI'
        },
        {
          title: 'Indiana Jones Adventure',
          location: {lat: 33.811349, lng: -117.920424},
          park: 'Disneyland',
          id: 'ChIJYfe3GNfX3IAR_H81DtmkMPo'
        },
        {
          title: "Soarin' Around the World",
          location: {lat: 33.808396, lng: -117.919971},
          park: 'Disneyland California Adventure',
          id: 'ChIJpVPw7tnX3IARcT0OcqyxKro'
        },
        {
          title: 'Grizzly River Run',
          location: {lat: 33.807548, lng: -117.920845},
          park: 'Disneyland California Adventure',
          id: 'ChIJx7RWv9nX3IARJ5l8-jFv0tc'
        },
        {
          title: "Ariel's Undersea Adventure",
          location: {lat: 33.806349, lng: -117.921259},
          park: 'Disneyland California Adventure',
          id: 'ChIJF_SqqdnX3IARbrfcackf3ok'
        },
        {
          title: "Goofy's Sky School",
          location: {lat: 33.806258, lng: -117.92277},
          park: 'Disneyland California Adventure',
          id: 'ChIJ-dlUQ9jX3IARSuuok0tq48g'
        },
        {
          title: 'Toy Story Midway Mania',
          location: {lat: 33.80459, lng: -117.921658},
          park: 'Disneyland California Adventure',
          id: 'ChIJO1Un79jX3IARePzk5hQD0kg'
        },
        {
          title: 'Incredicoaster',
          location: {lat: 33.804619, lng: -117.920656},
          park: 'Disneyland California Adventure',
          id: 'ChIJ_SkO-snX3IARQgRfdNnQVEI'
        },
        {
          title: "Mater's Junkyard Jamboree",
          location: {lat: 33.806489, lng: -117.919153},
          park: 'Disneyland California Adventure',
          id: 'ChIJmW1GftnX3IARWvHgfpJ7Lek'
        },
        {
          title: 'Radiator Springs Racers',
          location: {lat: 33.805188, lng: -117.918657},
          park: 'Disneyland California Adventure',
          id: 'ChIJDZni3dvX3IAR-UgkGaAmzJA'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const { rides } = this.state
    let hamburgerClass = this.state.isToggleOn ? 'hamburger-open visible' : 'hamburger-close visible'
    let sidebarToggle = this.state.isToggleOn ? false : true

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
        />

        <MapContainer
          rides={rides}
        />
      </div>
    );
  }
}

export default App
