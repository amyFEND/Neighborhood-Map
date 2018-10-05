import React, { Component } from 'react';

class LocationInfo extends Component {
  render() {
    return(
      <div className="location-info">
        <span className="location-info-header">Marker Title</span>
        <div className="location-details">
          <span>Park</span><br />
          <span>Ride Details</span><br />
          <span>Street View Image</span>
        </div>
      </div>
    )
  }
}

export default LocationInfo;
