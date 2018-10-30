import React, { Component } from 'react';
import './App.css';
import MovieListContainer from './containers/MovieListContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
          <MovieListContainer/>
      </div>
    );
  }
}

export default App;
