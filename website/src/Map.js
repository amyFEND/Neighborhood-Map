import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={ 16 }
    defaultCenter={{ lat: 33.810485, lng: -117.918989 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.810485, lng: -117.918989 }} />}
  </GoogleMap>
))

class Map extends Component {

  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default Map;
