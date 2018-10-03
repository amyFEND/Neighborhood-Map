import React, { Component } from 'react';
import './App.css';
import './Responsive.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <button>Info</button>
        <input type='text' name='search' placeholder='Filter results' />
      </div>
    )
  }
}

export default Sidebar;
