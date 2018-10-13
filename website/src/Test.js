import React, { Component } from 'react'
import sortBy from 'sort-by'

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiple: false
    };
    this.checked = this.checked.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  checked = (e) => {
    this.setState({multiple: e.target.value});
  }
  filterItems = (val, type) => {
     switch (type) {
      case 'park':
        this.setState({park: val});
        break;
      default:
        break;
    }
  }

  render() {
    // const { rides, data } = this.props
    let filteredItems = this.props.data;
    let state = this.state;
    let filterProperties = ["park"];
    filterProperties.forEach(function(filterBy) {
      let filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    let parkArray = this.props.data.filter((i, index) => (index < 2)).map(function(item) { return item.park });
        parkArray.sort(sortBy(''));
        parkArray.unshift("");

    return (
      <div className="container">
        <FilterOptions
            data={this.state.data}
            parkOptions={parkArray}
            changeOption={this.filterItems} />
        {
          // <div className="locations-container">
          //   <FilterItems data={filteredItems} />
          // </div>
        }
      </div>
    )
  }
}

class FilterOptions extends Component {
  changeOption = (type, e) => {
    let val = e.target.value;
    this.props.changeOption(val, type);
  }

  render() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <select id="park" className="select" defaultValue="select" onChange={this.changeOption.bind(this, 'park')}>
          <option disabled value="select">Filter by park...</option>
          {this.props.parkOptions.map(function(option, index) {
            return ( <option key={index} value={option}>{option === "" ? 'All' : option}</option> )
          })}
          </select>
        </div>
      </div>
    )
  }
}

class FilterItems extends Component {
  render() {
    return (
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div key={item.id} className="filter-item">{item.title}</div>
        );
      })}
      </div>
    )
  }
}

export { FilterForm, FilterOptions, FilterItems }
