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
            markerClicked={markerClicked}
            isOpen={isOpen}
        />
      </map>
    )
  }
}

export default MapContainer
