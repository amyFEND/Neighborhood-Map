import React, { Component } from 'react'
import Map from './Map'

class MapContainer extends Component {
  render() {
    const { rides, allRides, markerClicked, isOpen, clearQuery, isMainOpen, toggleMainOpen, zoomToMarkers, apiFail } = this.props

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
            apiFail={apiFail}
        />
      </map>
    )
  }
}

export default MapContainer
