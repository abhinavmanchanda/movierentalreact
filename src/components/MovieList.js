import React, { Component } from 'react';
import { MovieCard } from './MovieCard';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

export class MovieList extends Component {

  renderAllMovies = (movies) => {
    return movies.map(movie => {
      return (<ListGroupItem key={movie.title}>
        <MovieCard key={movie.name} movie={movie} />
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