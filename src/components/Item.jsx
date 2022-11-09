import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils/index'
import Delete from './Delete'
import Archive from './Archive'
import Unarchive from './Unarchive'

function Item({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className='border-t-[5px] border-[1px] p-4 rounded-lg'>
      <h2 className='underline font-bold text-lg'><Link to={`/note/${id}`}>{title}</Link></h2>
      <p className='text-[#6D6D6D]'>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
      <div className='flex'>
        <Delete id={id} onDelete={onDelete} />
        {
          archived === true && <Unarchive id={id} onUnarchive={onUnarchive} />
        }
        {
          archived === false && <Archive id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func
}

export default Item