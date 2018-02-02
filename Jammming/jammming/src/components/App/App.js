import React, { Component } from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
// import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

    /* hardcoded values */
    this.state = {
      SearchResults: [{
        name: 'My Own Hymn',
        artist: 'Above & Beyond',
        album: 'Common Ground',
        id: '1'
      },
      {
        name: 'Feel Tall',
        artist: 'OnCue',
        album: 'Can\'t Wait',
        id: '2'
      },
      {
        name: 'Pray For Me',
        artist: 'G-Eazy',
        album: 'The Beautiful & Damned',
        id: '3'
      }],
      playlistName: "My Playlist",
      playlistTracks: [{
        name: 'Trip',
        artist: 'San Holo',
        album: 'The Trip - EP',
        id: '4'
      },
      {
        name: 'Antidote',
        artist: 'Travis Scott',
        album: 'Rodeo',
        id: '3'
      }]
    };
  }

  /* this method will verify if a track is already in the playlist when the user clicks the + sign.
      if the track is not in the playlist the track will be added
  */
  addTrack(track) {
    // console.log("track = " + JSON.stringify(track));
    // console.log("playlist = " + JSON.stringify(this.state.playlistTracks));
    let ctr = 0;
    for(let i=0; i < this.state.playlistTracks.length; i++) {
      // console.log("\tplaylist track name = " + this.state.playlistTracks[i].name);
      // console.log("\tplaylist track id = " + this.state.playlistTracks[i].id);
      // console.log("\ttrack to add id = " + track.id);
      if(track.id === this.state.playlistTracks[i].id) {
        alert('Track is in playlist already!');
        return;
      } else {
        ctr++;
        // console.log("\t\tctr = " + ctr);
      }
    }
    if(ctr !== 0) {
      console.log("add track to playlist!");
      this.state.playlistTracks.push(track);
      console.log("new playlistTracks = " + JSON.stringify(this.state.playlistTracks));
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.SearchResults} onAdd={this.addTrack.bind(this)} />
            {/* <!-- Add a Playlist component --> */}
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
