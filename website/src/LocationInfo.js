import React, { Component } from 'react'

class LocationInfo extends Component {
  render() {
    const { ride, infoClicked, isHidden } = this.props
    const rideHeight = ride.height.length === 0 ? 'Any height' : `${ride.height[0]}in (${ride.height[1]}cm) or taller`
    const fastpass = ride.fastpass === true ? 'Yes' : 'No'
    const rideTypes = ride.type.map((type, i) => (<li key={i}>{type}</li>))

    return(
      <div tabIndex="0" aria-labelledby="Ride Title" className="location-info" onClick={infoClicked.bind(this,ride)}>
        <title id="location-info-header" className="location-info-header">
          <span>{ride.title}</span>
        </title>

        {!isHidden &&
        <section className="location-details">
          <span><strong>Park:</strong> {ride.park}</span>
          <br />
          <span><strong>Land:</strong> {ride.land}</span>
          <br />
          <span><strong>Minimum Height:</strong> {rideHeight}</span>
          <br />
          <span><strong>FASTPASS:</strong> {fastpass}</span>
          <br />
          <span><strong>Type:</strong> <ul className="location-ul">{rideTypes}</ul></span>
        </section>
      }
      </div>
    )
  }
}

export default LocationInfo
