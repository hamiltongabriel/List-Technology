import React from 'react';
import PropTypes from 'prop-types'
function TechItem ({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete}>
        Remover
      </button>
    </li>
  )
}

/**
 * To define default property
 */
TechItem.defaultProps = {
  tech: ''
}

/**
 * To validate Property
 */
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;
