import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import './App.css';
import './Responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="hamburger">&#9776;</button>
        <button className="cross">&#735;</button>

        <Navigation showSidebar={this.showSidebar} />

        {(<Sidebar />)}

        <MapContainer />
      </div>
    );
  }
}

export default App;
