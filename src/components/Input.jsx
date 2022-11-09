import React from 'react'
import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/ai'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <form className='w-full bg-transparent border-none text-[64px] dark:text-white font-bold py-2 placeholder:text-gray' onSubmit={this.onSubmitEventHandler}>
        <input className='w-full bg-transparent border-none text-[64px] font-bold py-2 placeholder:text-gray' type='text' placeholder='Catatan rahasia' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className='bg-transparent w-full border-0 py-2 min-h-[500px] text-2xl placeholder:text-gray' placeholder='Sebenarnya saya adalah ...' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button className='text-6xl fixed bottom-5 right-5' type='submit'><AiFillCheckCircle /></button>
      </form>
    )
  }
}

Input.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default Input