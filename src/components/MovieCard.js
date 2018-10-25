import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';

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