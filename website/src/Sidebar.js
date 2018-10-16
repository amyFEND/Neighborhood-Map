import React, { Component } from 'react'
import LocationInfo from './LocationInfo'
import './App.css'
import './Responsive.css'

class Sidebar extends Component {
  render() {
    const { rides, isToggleOn, query, updateQuery, clearQuery, infoClicked, filteredRides, filteredRideTypes, isHidden } = this.props
    let sidebarClass = isToggleOn ? 'sidebar-show sidebar-show-big' : 'sidebar-hide sidebar-show-big'

    let concat = filteredRides.concat(filteredRideTypes) // join filteredRides and filteredRideTypes arrays
    let set = new Set(concat) // filter out duplicates
    let allRides = [...set] // extend Set to new Array


    return (
      <div id="sidebar" className={sidebarClass}>

        <div className="sidebarOptns">
          <input
            type='text'
            value={query}
            name='search'
            placeholder='Filter by name'
            className="input"
            onChange={(e) => updateQuery(e.target.value)}
          />

          {
          /*
            ** TODO: get dropdown to filter rides list and markers **
              NOTE: when adding back in change in App.css: .locations-container { height: calc(100vh - 185px); } **
          */
          // <select className="select" defaultValue="select" onChange={() => this.props.changeOption(this, 'park')}>
          //   <option disabled value="select">Filter by park...</option>
          //   {this.props.parkOptions.map(function(option, index) {
          //     return ( <option key={index} value={option}>{option === "" ? 'All' : option}</option> )
          //   })}
          // </select>
          }

          <hr />
        </div>

        <div className="locations-container">
          {query &&
            (<div className="location-total">
              <span>Showing {allRides.length} of {rides.length} attractions</span>
              <button className="clearBtn" onClick={clearQuery}>Show All</button>
            </div>)
          }

          {allRides.map((ride) => (
            <LocationInfo
              ride={ride}
              key={ride.id}
              infoClicked={infoClicked}
              isHidden={isHidden}
            />
          ))}
        </div>

        <div className="infoBtn-container">
          <button className="infoBtn">Help</button>
        </div>

      </div>
    )
  }
}

export default Sidebar
