import React, { Component } from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
// import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

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
        album: 'The Trip - EP'
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.SearchResults} />
            {/* <!-- Add a Playlist component --> */}
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
