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
        <button className={this.state.isToggleOn ? 'hamburger visible' : 'cross visible'} onClick={this.handleClick}>
          {this.state.isToggleOn ? String.fromCharCode(0x2630) : String.fromCharCode(0x02DF)}
        </button>

        <Navigation showSidebar={this.showSidebar} />

        {(<Sidebar />)}

        <MapContainer />
      </div>
    );
  }
}

export default App;
