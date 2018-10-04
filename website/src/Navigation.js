import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <header className="App-header">
        <button className="hamburger">&#9776;</button>
        <button className="cross">&#735;</button>

        <h1 className="App-title">Neighborhood Map</h1>
      </header>
    )
  }
}

export default Navigation
