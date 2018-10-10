import React, { Component } from 'react'

class LocationInfo extends Component {
  render() {
    const { ride } = this.props

    return(
      <div className="location-info" onClick={this.props.infoWinClicked.bind(this,ride)}>
        <span className="location-info-header">{ride.title}</span>

        <div className="location-details">
          <span>Location: {ride.park}</span><br />
          <span>Ride Details TBD</span><br />
          <span>Street View Image</span>
        </div>
      </div>
    )
  }
}

export default LocationInfo
