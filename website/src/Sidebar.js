import React, { Component } from 'react';
import LocationInfo from './LocationInfo';
import './App.css';
import './Responsive.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className={this.props.isToggleOn ? 'sidebar-show sidebar-show-big' : 'sidebar-hide sidebar-show-big'}>

        <input type='text' name='search' placeholder='Filter results' className="input" />

        <select className="select">
          <option disabled value="select">Filter by park...</option>
          <option value="all">All</option>
          <option value="disneyland">Disneyland Park</option>
          <option value="californiaAdventure">Disney California Adventure</option>
        </select>

        <hr />

        <LocationInfo />

        <button className="infoBtn">About</button>

      </div>
    )
  }
}

export default Sidebar;
