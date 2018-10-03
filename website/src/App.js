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
        <Navigation />
        <Sidebar />
        <MapContainer />
      </div>
    );
  }
}

export default App;
