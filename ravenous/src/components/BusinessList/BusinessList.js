/* BusinessList.js */
/*
BusinessList component purpose: Simulate a list of businesses. Simulate what a
returned list of businesses would look like in Ravenous (after querying the
Yelp API).

Components used:
-Business
*/

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
};

export default BusinessList;
