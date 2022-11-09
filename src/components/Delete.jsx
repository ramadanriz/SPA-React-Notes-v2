import React from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'

function DeleteButton({ id, onDelete }) {
  return (
    <button className='text-4xl' onClick={() => onDelete(id)}>
      <MdDelete />
    </button>
  )
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton