import React, { useEffect, useState } from 'react'
import { getNote } from '../utils/api'
import { useParams } from 'react-router-dom'
import { showFormattedDate } from '../utils/index'
import NotFound from './NotFound'

const DetailPage = () => {
  const [note, setNote] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const response = await getNote(id)
      setNote(response.data)
    }

    getData()
  }, [id])

  if (!note) {
    return <NotFound />
  }

  return (
    <main className='mx-[83px] py-8'>
        <h1 className='text-[64px] font-bold'>{note.title}</h1>
        <p className='text-[16px] text-[#6D6D6D]'>{showFormattedDate(note.createdAt)}</p>
        <p className='mt-9'>{note.body}</p>
    </main>
  )
}

export default DetailPage