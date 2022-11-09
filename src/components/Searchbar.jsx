import React from 'react'
import PropTypes from 'prop-types'
import { LocaleConsumer } from '../context/LocaleContext'

function Searchbar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div>
            <input className='p-2 my-4 w-full border rounded-[4px] bg-transparent dark:border-white' type='text' placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'} value={keyword} onChange={(event) => keywordChange(event.target.value)}
            />
          </div>
        )
      }}
    </LocaleConsumer>
  )
}

Searchbar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default Searchbar