import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ReserveButton extends Component {
  render() {
    var text = this.props.reserved?"Return":"Reserve"
    return (
      <Button variant="contained" color="primary" onClick={this.props.onClick}>{text}</Button>
    );
  }
}

ReserveButton.propTypes = {
  reserved: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
