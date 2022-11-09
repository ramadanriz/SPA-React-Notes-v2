import React from 'react'
import PropTypes from 'prop-types'
import { MdUnarchive } from 'react-icons/md'

const Unarchive = ({ id, onUnarchive }) => {
  return (
    <button className='text-4xl' onClick={() => onUnarchive(id)}>
      <MdUnarchive />
    </button>
  )
}

Unarchive.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default Unarchive