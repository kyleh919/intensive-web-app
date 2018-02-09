import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <!-- Add a TrackList component --> */}
        <TrackList isRemoval={true} tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;