import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides } = this.props

    return (
      <map className="map-container">
        <Map rides={rides} />
      </map>
    )
  }
}

export default MapContainer
