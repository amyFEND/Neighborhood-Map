import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides, allRides, markerClicked, isOpen } = this.props

    return (
      <map className="map-container">
        <Map
            rides={rides}
            allRides={allRides}
            isOpen={isOpen}
            markerClicked={markerClicked}
        />
      </map>
    )
  }
}

export default MapContainer
