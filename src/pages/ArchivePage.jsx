import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import List from '../components/List'
import Searchbar from '../components/Searchbar'
import LocaleContext from '../context/LocaleContext'
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/api'

const ArchivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [notes, setNotes] = useState([])
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || ''
  })
  const { locale } = React.useContext(LocaleContext)

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data)
    })
  }, [])

  async function onDeleteHandler(id) {
    await deleteNote(id)
    const { data } = await getArchivedNotes()
    setNotes(data)
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id)
    const { data } = await getArchivedNotes()
    setNotes(data)
  }
  
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword)
    setSearchParams({ keyword })
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase())
  })

  return (
    <main>
      <h2 className='text-2xl font-bold'>{locale === 'id' ? 'Catatan Arsip' : 'Archive Note'}</h2>
      <Searchbar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <List notes={filteredNotes} onDelete={onDeleteHandler} onUnarchive={onUnarchiveHandler} />
      {/* <Link to='/new' className='text-6xl dark:text-white fixed bottom-5 right-5'><AiFillPlusCircle /></Link> */}
    </main>
  )
}

export default ArchivePage