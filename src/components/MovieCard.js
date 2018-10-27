import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types'; 
import {Row, Col} from 'react-bootstrap'

export class MovieCard extends React.Component {
  render() {
    return (
      <Row>
      <Col xs={3}>
        placeholder
      </Col>
      <Col xs={9}>
        {this.props.movie.name}
      </Col>
    </Row>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
  })
}
