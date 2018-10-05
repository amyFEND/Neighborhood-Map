import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import './App.css';
import './Responsive.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <button className={this.state.isToggleOn ? 'hamburger-open visible' : 'hamburger-close visible'} onClick={this.handleClick}>&#x2630;</button>

        <Navigation />

        <Sidebar isToggleOn={this.state.isToggleOn ? false : true} />

        <MapContainer />
      </div>
    );
  }
}

export default App;
