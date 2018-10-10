import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MainMarker from './images/main-marker.png'
import RideMarker from './images/rides-marker.png'

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
  lng: -117.918972
}

const centerMarker = {
  lat: 33.8091,
  lng: -117.918972,
  title: 'Happiest Place on Earth',
  park: 'center'
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 16 }
    defaultCenter={{ lat: center.lat, lng: center.lng }}
    defaultOptions={{ styles: mapStyles, mapTypeControl: false }}
  >
    {props.isMarkerShown && <Marker icon={MainMarker} position={{ lat: centerMarker.lat, lng: centerMarker.lng }} title={centerMarker.title} />}
    { /* TODO: get custom icons for markers */ }
    {props.rides.map((ride, index) => (
        <Marker
            key={index}
            icon={RideMarker}
            position={ride.location}
            title={ride.title}
        />
    ))}
  </GoogleMap>
))

class Map extends Component {
  render() {
    const { rides } = this.props

    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `calc(100vh - 95px)` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        rides={rides}
      />
    )
  }
}

export default Map
