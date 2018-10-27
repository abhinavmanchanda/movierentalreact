import React, { Component } from 'react';
import './App.css';
import { MovieList } from './components/MovieList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          "name": "The Shawshank Redemption",
          "snippet": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        }, {
          "name": "The Godfather",
          "snippet": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        }, {
          "name": "The Godfather: Part II",
          "snippet": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
        },
        {
          "name": "Gunda",
          "snippet": "Highest rated movie of all time."
        }, {
          "name": "Tabaahi - The Destroyer",
          "snippet": "Don't awaken his dark side."
        }, {
          "name": "Disco Dancer",
          "snippet": "Too cool for school."
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
          <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
