import React, { Component } from 'react';
import './App.css';
import './Responsive.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <button className="infoBtn">Info</button>
        <input type='text' name='search' placeholder='Filter results' className="input" />
      </div>
    )
  }
}

export default Sidebar;
