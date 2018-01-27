import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  renderAction() {
    // TODO: this is a hardcoded value, must remove in future
    const isRemoval = true;
    
    if(isRemoval) {
      return '-';
    } else {
      return '+'
    }
  }
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>
            {/* <!-- track name will go here --> */}
          </h3>
          <p>
            {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          </p>
        </div>
        <a className="Track-action">
          {/* <!-- + or - will go here --> */}
          {this.renderAction}
        </a>
      </div>
    );
  }
}

export default Track;