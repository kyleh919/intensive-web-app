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
  let sortByOptionValue;
  renderSortByOptions() {
    Object.keys(sortByOptions).map(sortByOption => {
      sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            // Use .renderSortByOptions() to sort the business by their options
            {this.renderSortByOptions}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
};
