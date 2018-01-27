import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {console.log(this.props.tracks)}
        {/* {console.log(this.props.tracks.map(track => track))} */}

        {
          this.props.tracks.map(track => {
            console.log(track.id);
            return <Track key={track.id} track={track} />
          })
        }

        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
    );
  }
}

export default TrackList;