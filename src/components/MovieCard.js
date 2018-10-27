import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types'; 
import {Row, Col} from 'react-bootstrap'

export class MovieCard extends React.Component {
  render() {
    return (
        <CardHeader
          title={this.props.movie.name}
          subheader={this.props.movie.snippet}
        />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
  })
}
