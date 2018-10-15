import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import mapStyles from './mapStyles.json'
import MainMarker from './images/main-marker.png'
import RideMarker from './images/rides-marker.png'

// import HoverMarker from './images/hover-marker.png'
/*
  ** TODO: figure out how to change marker icon on hover **
  ** TODO: figure out how to show infoWindow on marker hover **
*/

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
    {props.filteredRides.map((ride, index) => (
        <Marker
            key={index}
            icon={RideMarker}
            position={ride.location}
            title={ride.title}
            onClick={props.markerClicked.bind(this,ride)}
        />
    ))}
  </GoogleMap>
))

class Map extends Component {
  render() {
    const { rides, filteredRides, markerClicked } = this.props

    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
        loadingElement={<div style={{ height: `100%`, fontSize:`3em`, lineHeight:`4em`, color: `rgb(130,194,191)` }}>Loading...</div>}
        containerElement={<div style={{ height: `calc(100vh - 95px)` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        rides={rides}
        filteredRides={filteredRides}
        markerClicked={markerClicked}
      />
    )
  }
}

export default Map
