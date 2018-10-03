import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// Map styles made with Snazzy Maps
const mapStyles = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f8f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#85c282"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#426141"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#82c29f"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#4e745f"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ce878a"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ecd9da"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ddb7b9"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ce9698"
            },
            {
                "visibility": "simplified"
            },
            {
                "weight": "0.5"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d28a8a"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d28a8a"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b5dbd9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#60a29f"
            }
        ]
    }
];

const center = {
    lat: 33.8091,
    lng: -117.92277
  }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 16 }
    defaultCenter={{ lat: center.lat, lng: center.lng }}
    defaultOptions={{ styles: mapStyles, mapTypeControl: false }}
  >
    {props.isMarkerShown && <Marker title={'Happiest Place on Earth'} position={{ lat: 33.8091, lng: -117.918972 }} />}
    //TODO: figure out how to manipulate markers
    <Marker
      title={"Peter Pan's Flight"}
      position={{lat: 33.813126, lng: -117.91888}}
      />
    <Marker
      title={'Buzz Lightyear Astro-Blasters'}
      position={{lat: 33.812196, lng: -117.91799}}
      />
    <Marker
      title={'Star Tours'}
      position={{lat: 33.811883, lng: -117.917963}}
      />
    <Marker
      title={'Autopia'}
      position={{lat: 33.812567, lng: -117.916366}}
      />
    <Marker
      title={'Space Mountain'}
      position={{lat: 33.81138, lng: -117.917307}}
      />
    <Marker
      title={'Haunted Mansion'}
      position={{lat: 33.811723, lng: -117.922184}}
      />
    <Marker
      title={'Pirates of the Caribbean'}
      position={{lat: 33.811254, lng: -117.920785}}
      />
    <Marker
      title={'The Many Adventures of Winnie the Pooh'}
      position={{lat: 33.812398, lng: -117.922601}}
      />
    <Marker
      title={'Matterhorn Bobsleds'}
      position={{lat: 33.81307, lng: -117.91782}}
      />
    <Marker
      title={'Big Thunder Moutnain Railroad'}
      position={{lat: 33.812521, lng: -117.920444}}
      />
    <Marker
      title={'Jungle Cruise'}
      position={{lat: 33.811437, lng: -117.919952}}
      />
    <Marker
      title={'Indiana Jones Adventure'}
      position={{lat: 33.811349, lng: -117.920424}}
      />
    <Marker
      title={"Soarin' Around the World"}
      position={{lat: 33.808396, lng: -117.919971}}
      />
    <Marker
      title={'Grizzly River Run'}
      position={{lat: 33.807548, lng: -117.920845}}
      />
    <Marker
      title={"Ariel's Undersea Adventure"}
      position={{lat: 33.806349, lng: -117.921259}}
      />
    <Marker
      title={"Goofy's Sky School"}
      position={{lat: 33.806258, lng: -117.92277}}
      />
    <Marker
      title={'Toy Story Midway Mania'}
      position={{lat: 33.80459, lng: -117.921658}}
      />
    <Marker
      title={'Incredicoaster'}
      position={{lat: 33.804619, lng: -117.920656}}
      />
    <Marker
      title={"Mater's Junkyard Jamboree"}
      position={{lat: 33.806489, lng: -117.919153}}
      />
    <Marker
      title={'Radiator Springs Racers'}
      position={{lat: 33.805188, lng: -117.918657}}
      />
  </GoogleMap>
))

class Map extends Component {

  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `calc(100vh - 75px)` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default Map;
