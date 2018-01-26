import React, { Component } from 'react';
import './Playlist.css';
import '../TrackList/TrackList';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <!-- Add a TrackList component --> */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;