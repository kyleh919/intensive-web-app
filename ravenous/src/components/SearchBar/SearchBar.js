/* SearchBar.js */
/*
SearchBar component purpose: Search for businesses. Communicates with the Yelp
API.

Should allow users to search businesses by: best match, highest rated, or most
  reviewed.
*/

import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
     };

     this.handleTermByChange = this.handleTermByChange.bind(this);
     this.handleLocationChange = this.handleLocationChange.bind(this);
     this.handleSearch = this.handleSearch.bind(this);
  }

  // returns the search bar CSS class that should be selected on screen
  getSortByClass(sortByOption) {
    // console.log("    this.state.sortBy = " + this.state.sortBy);
    // console.log("    sortByOption = " + sortByOption);
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  // sets the state of the three sorting options
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermByChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      // sortByOption = a key
      // sortByOptionValue = a value
      let sortByOptionValue = sortByOptions[sortByOption];
      // console.log("sortByOptionValue = " + sortByOptionValue);

      /*
        className styles the sort option based on what the user has selected, if
          'active' per getSortByClass then it will be highlighted
        onClick will set a sort option to sortBy in the state
      */
      return (
        <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermByChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>
    );
  }
};

export default SearchBar;
