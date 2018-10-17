import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides, allRides, markerClicked, isOpen, clearQuery, isMainOpen, toggleMainOpen, zoomToMarkers } = this.props

    return (
      <map className="map-container">
        <Map
            rides={rides}
            allRides={allRides}
            isOpen={isOpen}
            markerClicked={markerClicked}
            clearQuery={clearQuery}
            isMainOpen={isMainOpen}
            toggleMainOpen={toggleMainOpen}
            zoomToMarkers={zoomToMarkers}
        />
      </map>
    )
  }
}

export default MapContainer
