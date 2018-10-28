import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia'

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
        <CardMedia className="thumbnail"
        title="Without Quote" style={styles.thumbnail}
        image="https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg"
        />
        <CardHeader title={this.props.movie.name} subheader={this.props.movie.snippet} />
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
  })
}
