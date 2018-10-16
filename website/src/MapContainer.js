import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides, filteredRides, filteredRideTypes, markerClicked, isOpen } = this.props

    return (
      <map className="map-container">
        <Map
            rides={rides}
            filteredRides={filteredRides}
            filteredRideTypes={filteredRideTypes}
            markerClicked={markerClicked}
            isOpen={isOpen}
        />
      </map>
    )
  }
}

export default MapContainer
