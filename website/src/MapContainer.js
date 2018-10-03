import React, { Component } from 'react';
import Map from './Map';

class MapContainer extends Component {
  render() {
    return (
      <map className="map-container">
        <Map />
      </map>
    )
  }
}

export default MapContainer
