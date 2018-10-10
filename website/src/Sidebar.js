import React, { Component } from 'react'
import LocationInfo from './LocationInfo'
import './App.css'
import './Responsive.css'

class Sidebar extends Component {
  render() {
    const { rides, isToggleOn, query, filteredRides } = this.props
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

          <select className="select" defaultValue="select">
            <option disabled value="select">Filter by park...</option>
            <option value="all">All</option>
            <option value="disneyland">Disneyland Park</option>
            <option value="californiaAdventure">Disney California Adventure</option>
          </select>

          <hr />
        </div>

        <div className="locations-container">
          {filteredRides.length !== rides.length &&
            (<div className="location-total">
              <span>Showing {filteredRides.length} of {rides.length} attractions</span>
              <button className="clearBtn" onClick={this.props.clearQuery}>Show All</button>
            </div>)
          }
          {filteredRides.map((ride, index) => (
            <LocationInfo
              ride={ride}
              key={index}
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
