import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <Map />
      </div>
    )
  }
}

export default MapContainer
