import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className="primary-button-container grow-on-hover">
      <button className="primary-button-button button textXS">
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
