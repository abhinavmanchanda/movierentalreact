import React, { Component } from 'react';
import { MovieCard } from './MovieCard';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

export class MovieList extends Component {

  renderAllMovies = (movies) => {
    const reserveMovie = this.props.reserveMovie
    return movies.map(movie => {
      return (<ListGroupItem key={movie.name}>
        <MovieCard key={movie.name} movie={movie} 
        onReserve={() => reserveMovie(movie.name)}/>
      </ListGroupItem>);
    });
  }

  render() {
    return (
    <ListGroup>
      {this.renderAllMovies(this.props.movies)}
    </ListGroup>);
  }
}