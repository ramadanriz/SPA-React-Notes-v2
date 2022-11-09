import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'
import LocaleContext from '../context/LocaleContext'

function List({ notes, onDelete, onArchive, onUnarchive }) {
  const { locale } = React.useContext(LocaleContext)

  return (
    <>
      {notes.length > 0 ? (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-5'>
          {notes.map((note) => (
            <Item key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} {...note} />
          ))}
        </div>
      ) : (
        <p>{locale === 'id' ? 'Tidak ada catatan' : 'No Notes'}</p>
      )}
    </>
  )
}

List.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func
}

export default List