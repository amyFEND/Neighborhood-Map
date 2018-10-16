import React, { Component } from 'react'

class LocationInfo extends Component {
  render() {
    const { ride, infoClicked, isHidden } = this.props
    const rideTypes = ride.type.map((type, i) => (<li key={i}>{type}</li>))

    return(
      <div className="location-info" onClick={infoClicked.bind(this,ride)}>
        <div className="location-info-header">
          <span>{ride.title}</span>
        </div>

        {!isHidden &&
        <div className="location-details">
          <span><strong>Park:</strong> {ride.park}</span><br />
          <span><strong>Land:</strong> {ride.land}</span><br />
          <span><strong>Height:</strong> {ride.height.length === 1 ? 'Any height' : `${ride.height[0]}in (${ride.height[1]}cm) or taller`}</span><br />
          <span><strong>FASTPASS:</strong> {ride.fastpass === true ? 'Yes' : 'No'}</span><br />
          <ul className="location-ul">{rideTypes}</ul>
        </div>
      }
      </div>
    )
  }
}

export default LocationInfo
