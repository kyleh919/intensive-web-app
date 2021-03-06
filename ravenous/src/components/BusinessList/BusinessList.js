/* BusinessList.js */
/*
BusinessList component purpose: Renders a list of businesses. Dictates how
the returned list of businesses would look like in Ravenous (after querying the
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
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id}/>
          })
        }
      </div>
    );
  }
};

export default BusinessList;
