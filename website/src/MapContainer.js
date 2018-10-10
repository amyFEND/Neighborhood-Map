import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides, filteredRides } = this.props

    return (
      <map className="map-container">
        <Map rides={rides} filteredRides={filteredRides} />
      </map>
    )
  }
}

export default MapContainer
