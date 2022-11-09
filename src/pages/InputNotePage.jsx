import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { addNote } from '../utils/api'

const InputNotePage = () => {
  const navigate = useNavigate()

  async function onAddNoteHandler(note) {
    await addNote(note)
    navigate('/')
  }

  return (
    <main>
      <Input addNote={onAddNoteHandler} />
    </main>
  )
}

export default InputNotePage