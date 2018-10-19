import React, { Component } from 'react'

class LocationInfo extends Component {
  render() {
    const { ride, infoClicked, isHidden } = this.props
    const rideHeight = ride.height.length === 0 ? 'Any height' : `${ride.height[0]}in (${ride.height[1]}cm) or taller`
    const fastpass = ride.fastpass === true ? 'Yes' : 'No'
    const rideTypes = ride.type.map((type, i) => (<li key={i}>{type}</li>))

    return(
      <div className="location-info" onClick={infoClicked.bind(this,ride)}>
        <div className="location-info-header">
          <span>{ride.title}</span>
        </div>

        {!isHidden &&
        <div className="location-details">
          <span><strong>Park:</strong> {ride.park}</span>
          <br />
          <span><strong>Land:</strong> {ride.land}</span>
          <br />
          <span><strong>Height:</strong> {rideHeight}</span>
          <br />
          <span><strong>FASTPASS:</strong> {fastpass}</span>
          <br />
          <span><strong>Type:</strong> <ul className="location-ul">{rideTypes}</ul></span>
        </div>
      }
      </div>
    )
  }
}

export default LocationInfo
