import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <MapContainer />
      </div>
    );
  }
}

export default App;
