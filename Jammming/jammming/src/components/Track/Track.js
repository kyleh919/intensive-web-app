import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  
  renderAction() {
    // TODO: this is a hardcoded value, must remove in future
    const isRemoval = true;
    
    if(isRemoval) {
      return '-';
    } else {
      return '+'
    }
  }
  
  // ties the addTrack method to the + sign
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>
            {/* <!-- track name will go here --> */}
            {this.props.track.name}
          </h3>
          <p>
            {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <a className="Track-action">
          {/* <!-- + or - will go here --> */}
          {/* {this.renderAction()} */}
          <p onClick={this.addTrack}>+</p>
        </a>
      </div>
    );
  }
}

export default Track;