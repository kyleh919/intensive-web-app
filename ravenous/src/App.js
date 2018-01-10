import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList.js';
import SearchBar from '../src/components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
