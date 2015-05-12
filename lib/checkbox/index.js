'use strict';

import React from 'react';


/**
 * CheckboxWithLabel
 */

export default class CheckboxWithLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  onChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return (
      <label>
        <input
          checked={ this.state.isChecked }
          onChange={ this.onChange.bind(this) }
          ref='input'
          type='checkbox'
        />
        { this.state.isChecked ? this.props.labelOn : this.props.labelOff }
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {
  labelOn: React.PropTypes.string,
  labelOff: React.PropTypes.string
};
