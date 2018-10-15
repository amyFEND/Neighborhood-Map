import React, { Component } from 'react'
import LocationInfo from './LocationInfo'
import './App.css'
import './Responsive.css'

class Sidebar extends Component {
  render() {
    const { rides, isToggleOn, query, filteredRides, isHidden } = this.props
    let sidebarClass = isToggleOn ? 'sidebar-show sidebar-show-big' : 'sidebar-hide sidebar-show-big'

    return (
      <div id="sidebar" className={sidebarClass}>

        <div className="sidebarOptns">
          <input
            type='text'
            value={query}
            name='search'
            placeholder='Filter by name'
            className="input"
            onChange={(e) => this.props.updateQuery(e.target.value)}
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
          {filteredRides.length !== rides.length &&
            (<div className="location-total">
              <span>Showing {filteredRides.length} of {rides.length} attractions</span>
              <button className="clearBtn" onClick={this.props.clearQuery}>Show All</button>
            </div>)
          }
          {filteredRides.map((ride) => (
            <LocationInfo
              ride={ride}
              key={ride.id}
              infoWinClicked={this.props.infoWinClicked}
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
