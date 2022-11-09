import React from 'react'
import PropTypes from 'prop-types'
import { IoMdArchive } from 'react-icons/io'

const Archive = ({ id, onArchive }) => {
  return (
    <button className='text-3xl' onClick={() => onArchive(id)}>
      <IoMdArchive />
    </button>
  )
}

Archive.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default Archive