import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import MapContainer from './MapContainer'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.css'
import './Responsive.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      isOpen: false,
      isHidden: true,
      isToggleOn: true,
      isMainOpen: false,
      multiple: false,
      zoomToMarkers: null,
      apiRides: [],
      rides: [
              { title: "Peter Pan's Flight",
                location: {lat: 33.813126, lng: -117.91888},
                park: 'Disneyland',
                land: 'Fantasyland',
                height: [],
                type: ['Small Drops', 'Slow', 'Dark', 'Loud', 'Indoor'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353399' },
              { title: "Disneyland Railroad",
                location: {lat: 33.810033, lng: -117.918959},
                park: 'Disneyland',
                land: 'Main Street, U.S.A.',
                height: [],
                type: ['Slow', 'Dark', 'Loud'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353315' },
              { title: 'Buzz Lightyear Astro-Blasters',
                location: {lat: 33.812196, lng: -117.91799},
                park: 'Disneyland',
                land: 'Tomorrowland',
                height: [],
                type: ['Slow', 'Spinning', 'Dark', 'Loud', 'Indoor', 'Interactive'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353301' },
              { title: 'Star Tours',
                location: {lat: 33.811883, lng: -117.917963},
                park: 'Disneyland',
                land: 'Tomorrowland',
                height: [40, 102],
                type: ['Small Drops', 'Thrill', 'Dark', 'Loud', 'Indoor'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353439' },
              { title: 'Autopia',
                location: {lat: 33.812567, lng: -117.916366},
                park: 'Disneyland',
                land: 'Tomorrowland',
                height: [32, 81],
                type: ['Slow', 'Loud', 'Interactive'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353293' },
              { title: 'Space Mountain',
                location: {lat: 33.81138, lng: -117.917307},
                park: 'Disneyland',
                land: 'Tomorrowland',
                height: [40, 102],
                type: ['Small Drops', 'Thrill', 'Dark', 'Loud', 'Scary', 'Indoor'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_18237368' },
              { title: 'Haunted Mansion',
                location: {lat: 33.811723, lng: -117.922184},
                park: 'Disneyland',
                land: 'New Orleans Square',
                height: [],
                type: ['Slow', 'Dark', 'Loud', 'Scary', 'Indoor'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353347' },
              { title: 'Pirates of the Caribbean',
                location: {lat: 33.811254, lng: -117.920785},
                park: 'Disneyland',
                land: 'New Orleans Square',
                height: [],
                type: ['Small Drops', 'Slow', 'Water', 'Dark', 'Loud', 'Scary', 'Indoor'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353405' },
              { title: 'The Many Adventures of Winnie the Pooh',
                location: {lat: 33.812525, lng: -117.923135},
                park: 'Disneyland',
                land: 'Critter Country',
                height: [],
                type: ['Slow', 'Dark', 'Loud', 'Indoor'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353449' },
              { title: 'Matterhorn Bobsleds',
                location: {lat: 33.81307, lng: -117.91782},
                park: 'Disneyland',
                land: 'Fantasyland',
                height: [42, 107],
                type: ['Small Drops', 'Thrill', 'Water', 'Dark', 'Loud', 'Scary'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353377' },
              { title: 'Big Thunder Moutnain Railroad',
                location: {lat: 33.812521, lng: -117.920444},
                park: 'Disneyland',
                land: 'Frontierland',
                height: [40, 102],
                type: ['Small Drops', 'Thrill', 'Dark', 'Loud'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353295' },
              { title: 'Jungle Cruise',
                location: {lat: 33.811437, lng: -117.919952},
                park: 'Disneyland',
                land: 'Adventureland',
                height: [],
                type: ['Slow', 'Water', 'Loud'],
                fastpass: false,
                id: 'DisneylandResortMagicKingdom_353363' },
              { title: 'Indiana Jones Adventure',
                location: {lat: 33.811349, lng: -117.920424},
                park: 'Disneyland',
                land: 'Adventureland',
                height: [46, 117],
                type: ['Small Drops', 'Thrill', 'Dark', 'Loud', 'Scary', 'Indoor'],
                fastpass: true,
                id: 'DisneylandResortMagicKingdom_353355' },
              { title: "Soarin' Around the World",
                location: {lat: 33.808396, lng: -117.919971},
                park: 'Disney California Adventure',
                land: 'Grizzly Peak',
                height: [40, 102],
                type: ['Small Drops', 'Slow', 'Dark', 'Loud', 'Indoor'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_353431' },
              { title: 'Grizzly River Run',
                location: {lat: 33.807548, lng: -117.920845},
                park: 'Disney California Adventure',
                land: 'Grizzly Peak',
                height: [42, 107],
                type: ['Small Drops', 'Thrill', 'Water', 'Spinning'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_353345' },
              { title: "Ariel's Undersea Adventure",
                location: {lat: 33.806349, lng: -117.921259},
                park: 'Disney California Adventure',
                land: 'Paradise Gardens Park',
                height: [],
                type: ['Slow', 'Dark', 'Loud', 'Indoor'],
                fastpass: false,
                id: 'DisneylandResortCaliforniaAdventure_15575069' },
              { title: "Goofy's Sky School",
                location: {lat: 33.806258, lng: -117.92277},
                park: 'Disney California Adventure',
                land: 'Paradise Gardens Park',
                height: [42, 107],
                type: ['Small Drops', 'Thrill', 'Loud'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_15822029' },
              { title: 'Toy Story Midway Mania',
                location: {lat: 33.80459, lng: -117.921658},
                park: 'Disney California Adventure',
                land: 'Pixar Pier',
                height: [],
                type: ['Dark', 'Loud', 'Indoor', 'Interactive'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_353453' },
              { title: 'Incredicoaster',
                location: {lat: 33.804619, lng: -117.920656},
                park: 'Disney California Adventure',
                land: 'Pixar Pier',
                height: [48, 122],
                type: ['Big Drops', 'Thrill', 'Loud', 'New'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_353303' },
              { title: "Mater's Junkyard Jamboree",
                location: {lat: 33.806489, lng: -117.919153},
                park: 'Disney California Adventure',
                land: 'Cars Land',
                height: [32, 81],
                type: ['Spinning'],
                fastpass: false,
                id: 'DisneylandResortCaliforniaAdventure_16514431' },
              { title: 'Radiator Springs Racers',
                location: {lat: 33.805188, lng: -117.918657},
                park: 'Disney California Adventure',
                land: 'Cars Land',
                height: [40, 102],
                type: ['Small Drops', 'Thrill', 'Dark', 'Loud'],
                fastpass: true,
                id: 'DisneylandResortCaliforniaAdventure_16514416' }
            ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.clearQuery = this.clearQuery.bind(this)
    this.markerClicked = this.markerClicked.bind(this)
    this.infoClicked = this.infoClicked.bind(this)
    this.toggleMainOpen = this.toggleMainOpen.bind(this)
    this.zoomMap = this.zoomMap.bind(this)
    this.getdisneylandRides = this.getdisneylandRides.bind(this)
    this.getdisneyCaRides = this.getdisneyCaRides.bind(this)
    /* ** Code for dropdown filter - work in progress **
      ** TODO: get dropdown to filter rides list and markers **
    */
    // this.checked = this.checked.bind(this)
    // this.filterItems = this.filterItems.bind(this)
  }

  componentDidMount() {
    this.zoomMap()
    this.getdisneylandRides()
    this.getdisneyCaRides()
  }

  /* *** Toggles Sidebar *** */
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  /* *** Query functions *** */
  updateQuery = (query) => {
    this.setState({ query })
    if (query === '') {
      this.setState( { isHidden: true })
    }
  }
  clearQuery = (query) => {
    this.setState({ query: '' })
    this.setState({ isHidden: true })
    this.setState({ isOpen: false })

  }

  /* *** Selects marker based on user click, hides all other markers, shows InfoWindow *** */
  markerClicked = (ride) => {
    this.setState({ query: ride.title })
    this.setState({ isHidden: !this.state.isHidden })
    this.setState({ isOpen: !this.state.isOpen })
    this.setState({ isMainOpen: false })
  }

  /* *** Selects location info div on user click, hides all other location info dix, shows InfoWindow *** */
  infoClicked = (ride) => {
    this.setState({ query: ride.title })
    this.setState({ isHidden: !this.state.isHidden })
    this.setState({ isOpen: !this.state.isOpen })
    this.setState({ isMainOpen: false })
  }

  /* *** Selects Main marker *** */
  toggleMainOpen = () => {
    this.setState(prevState => ({ isMainOpen: !prevState.isMainOpen }))
    this.setState({ query: '' })
    this.setState({ isHidden: true })
    this.setState({ isOpen: false })
  }

  zoomMap = () => {
    this.setState({
      zoomToMarkers: map => {
        const bounds = new window.google.maps.LatLngBounds();
        map.props.children.forEach((child) => {
          if (child.type === Marker) {
            bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
          }
        })
        if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
          var offset = 0.003;
          var center = bounds.getCenter();
          bounds.extend(new window.google.maps.LatLng(center.lat() + offset, center.lng() + offset));
          bounds.extend(new window.google.maps.LatLng(center.lat() - offset, center.lng() - offset));
        }
        map.fitBounds(bounds);
      }
    });
  }

  getdisneylandRides = () => {
    fetch('http://localhost:3001/disneyland')
      .then( res => res.json() )
      .then(disneylandRides => this.setState({ apiRides: [...this.state.apiRides, ...disneylandRides] }))
      .catch(err => {
        console.log('there has been an error loading the rides')
        console.log(err)
      });
  }

  getdisneyCaRides = () => {
    fetch('http://localhost:3001/disneyCA')
      .then( res => res.json() )
      .then(disneyCaRides => this.setState({ apiRides: [...this.state.apiRides, ...disneyCaRides] }))
      .catch(err => {
        console.log('there has been an error loading the rides')
        console.log(err)
      });
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
    const { rides, query, zoomToMarkers } = this.state
    let hamburgerClass = this.state.isToggleOn ? 'hamburger-open visible' : 'hamburger-close visible'
    let sidebarToggle = this.state.isToggleOn ? false : true

    /* *** Filters by Ride Title *** */
    let filteredRides
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredRides = rides.filter((ride) => match.test(ride.title))
    } else {
      filteredRides = rides
    }

    /* *** Filters by Ride Type *** */
    let filteredRideTypes
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredRideTypes = rides.filter((ride) => match.test(ride.type))
    } else {
      filteredRideTypes = []
    }

    /* *** Joins aforementioned arrays, removes duplicates, returns new array *** */
    let concat = filteredRides.concat(filteredRideTypes)
    let set = new Set(concat)
    let allRides = [...set]
    allRides.sort(sortBy('title'))

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

        <button className={hamburgerClass} onClick={this.handleClick}>&#x2630;</button>

        <Navigation />

        <ul>
          {this.state.disneyCaRides.map(disneyCaRide =>
            (<li key={disneyCaRide.id}>{disneyCaRide.name} - current wait time: {disneyCaRide.waitTime} minutes</li>))}
        </ul>
        <ul>
          {this.state.disneylandRides.map(disneylandRide =>
            (<li key={disneylandRide.id}>{disneylandRide.name} - current wait time: {disneylandRide.waitTime} minutes</li>))}
        </ul>

        <Sidebar
            rides={rides}
            allRides={allRides}
            isToggleOn={sidebarToggle}
            query={query}
            updateQuery={this.updateQuery}
            clearQuery={this.clearQuery}
            infoClicked={this.infoClicked}
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
            allRides={allRides}
            isOpen={this.state.isOpen}
            markerClicked={this.markerClicked}
            clearQuery={this.clearQuery}
            isMainOpen={this.state.isMainOpen}
            toggleMainOpen={this.toggleMainOpen}
            zoomToMarkers={zoomToMarkers}
        />
      </div>
    );
  }
}

export default App
