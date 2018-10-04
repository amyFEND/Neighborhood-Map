import React, { Component } from 'react';
import './App.css';
import './Responsive.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <button className="infoBtn">Info</button>
        <input type='text' name='search' placeholder='Filter results' className="input" />
        <select className="select">
          <option disabled value="select">Filter by park...</option>
          <option value="all">All</option>
          <option value="disneyland">Disneyland Park</option>
          <option value="californiaAdventure">Disney California Adventure</option>
        </select>
        <hr />
        <div className="location-info">Location information here</div>
      </div>
    )
  }
}

export default Sidebar;
