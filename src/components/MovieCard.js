import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia'
import { ReserveButton } from './ReserveButton';

var styles = {
  thumbnail : {
    height: 100,
    width: 100,
    float: 'left',
    margin: '-0.5em 1em 1.5em 0',
    paddingBottom: '1em'
  }
}
export class MovieCard extends React.Component {
  render() {
    return (
      <Card>
        <CardMedia className="thumbnail" title={this.props.movie.name} 
        style={styles.thumbnail} image={this.props.movie.imageUrl} />
        <CardHeader title={this.props.movie.name} subheader={this.props.movie.snippet} />
        <ReserveButton reserved={this.props.movie.reserved} onClick={() => this.props.reserve(this.props.movie.name)}/>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reserved: PropTypes.bool
  })
}
