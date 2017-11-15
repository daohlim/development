import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class ListManager extends Component {
    constructor(props) {
        super(props);

        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "Ranged & Melee",
            role: "All",
            sort: "Alphabetical"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Change filter check to account for type
        if (this.state.type === "Ranged & Melee") {
          if (this.state.role === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1;
          }
          else {
            return (item.name.toLowerCase().search(this.state.search) !== -1) && (item.tags.includes(this.state.role.toLowerCase()))
          }
        }
        else {
          if (this.state.role === "All") {
            return (item.name.toLowerCase().search(this.state.search) !== -1) && (item.tags.includes(this.state.type.toLowerCase()))
          }
          else {
            return (item.name.toLowerCase().search(this.state.search) !== -1) && (item.tags.includes(this.state.type.toLowerCase())) &&
            (item.tags.includes(this.state.role.toLowerCase()))
          }
        }
    }

    compare = (a,b) => {
       if (this.state.sort === "Alphabetical") {
         var nameA = a.name
         var nameB = b.name
         if (nameA < nameB) {
           return -1
         }
         if (nameA > nameB) {
           return 1
         }
         return 0
       } else if (this.state.sort === "Win Rate") {
         return b.winrate - a.winrate
       } else if (this.state.sort === "Tier") {
         return b.tier - a.tier
       }
     }
     // <img src={require("./images/AhriSquare.png")} alt="Champion Logo" height="120" width="120"/>
     makeItem = (item) => {
       return (
       <div class="itemContainer">
          <h4>{item.name}</h4>
          <img src={item.imgLink} alt="Champion Logo" height="120" width="120"/>
          <div> <p class="tierInfo"> Tags: </p> <p class="tierInfo">{item.tags.toString()}</p> </div>
          <div> <p class="tierInfo"> Tier List: </p> <p class="tierInfo">{item.tier}</p> </div>
          <div> <p class="tierInfo"> Win Rate: </p> <p class="tierInfo">{item.winrate}</p> </div>
       </div>
     )
     }

     generateList = (arr) => {
       if (arr.length == 0) {
         return (
           <h2 class="errorMessage"> No results match your search criteria </h2>
         )
       } else {
         return arr.sort(this.compare).map(this.makeItem)
       }
     }

    setType = (eventKey, event) => {
      this.setState({type: eventKey})
    }

    setSort = (eventKey, event) => {
      this.setState({sort: eventKey})
    }

    setRole = (eventKey, event) => {
      this.setState({role: eventKey})
    }

    // TODO: Add an event handling method for when an item in dropdown is selected
    render() {
        return (
            <div className="filter-list">
                {/* TODO: Add more menu items and add an onSelect function*/}
                <div class="searchContainer">
                  <p class="menuDesc"> Attack Range: </p>
                  <DropdownButton id="typeDropdown" title={this.state.type}>
                      <MenuItem eventKey="Ranged & Melee" onSelect={this.setType}>Ranged & Melee</MenuItem>
                      <MenuItem eventKey="Ranged" onSelect={this.setType}>Ranged</MenuItem>
                      <MenuItem eventKey="Melee" onSelect={this.setType}>Melee</MenuItem>
                  </DropdownButton>

                  <p class="menuDesc"> Role: </p>
                  <DropdownButton id="typeDropdown" title={this.state.role}>
                      <MenuItem eventKey="All" onSelect={this.setRole}>All</MenuItem>
                      <MenuItem eventKey="Carry" onSelect={this.setRole}>Carry</MenuItem>
                      <MenuItem eventKey="Bruiser" onSelect={this.setRole}>Bruiser</MenuItem>
                      <MenuItem eventKey="Mage" onSelect={this.setRole}>Mage</MenuItem>
                      <MenuItem eventKey="Support" onSelect={this.setRole}>Support</MenuItem>
                      <MenuItem eventKey="Tank" onSelect={this.setRole}>Tank</MenuItem>
                  </DropdownButton>

                  <p class="menuDesc"> Sort By: </p>
                  <DropdownButton id="typeDropdown" title={this.state.sort}>
                      <MenuItem eventKey="Alphabetical" onSelect={this.setSort}>Alphabetical</MenuItem>
                      <MenuItem eventKey="Win Rate" onSelect={this.setSort}>Win Rate</MenuItem>
                      <MenuItem eventKey="Tier" onSelect={this.setSort}>Tier</MenuItem>
                  </DropdownButton>

                  <input class="searchBar" type="text" placeholder="Search" onChange={this.onSearch} />
                </div>
                <div class="results">
                  {this.generateList(this.props.items.filter(this.filterItem))}
                </div>
            </div>
        );
    }
}

export default ListManager;
