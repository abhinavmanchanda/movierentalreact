import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types'; 

export class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <CardHeader
          title={this.props.movie.title}
          subheader={this.props.movie.snippet}
        />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
  })
}
