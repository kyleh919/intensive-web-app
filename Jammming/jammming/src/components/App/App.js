import React, { Component } from 'react';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
// import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

    /* binds */
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

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

  updatePlaylist(track) {
    this.setState({
      playlistTracks: track
    });
  }

  // TODO: Have to add rendering ability to remove and add tracks from lists if buttons are clicked
  // TODO: use setState instead of push and splice

  /* this method will verify if a track is already in the playlist when the user clicks the + sign.
      if the track is not in the playlist the track will be added
  */
  addTrack(track) {
    // console.log("track = " + JSON.stringify(track));
    // console.log("playlist = " + JSON.stringify(this.state.playlistTracks));
    let ctr = 0;
    for(let i=0; i < this.state.playlistTracks.length; i++) {
      console.log("\tplaylist track name = " + this.state.playlistTracks[i].name);
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
      // this.updatePlaylist(track);
      
      
      console.log("new playlistTracks = " + JSON.stringify(this.state.playlistTracks));
    }
  }

  /* removes a track via it's id if the - sign is clicked
   */
  removeTrack(track) {
    console.log(track);
    
    let ctr = 0;
    for(let i=0; i < this.state.playlistTracks.length; i++) {
      console.log("\tplaylist track name = " + this.state.playlistTracks[i].name);
      console.log("\tplaylist track id = " + this.state.playlistTracks[i].id);
      console.log("\ttrack to remove id = " + track.id);
    
      if(track.id === this.state.playlistTracks[i].id) {
        alert("remove track found");

        console.log('\t\tctr = ' + ctr);
        this.state.playlistTracks.splice(ctr,1);
        console.log('\t\tplaylist after removal = ' + JSON.stringify(this.state.playlistTracks));
        return;
      } else {
        ctr++;
      }
    }
    alert('passed logic')
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
    // console.log("new playlistName = " + this.state.playlistName)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.SearchResults} onAdd={this.addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <PlayList playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
