import React from 'react'
import { ThemeConsumer } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

function Theme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className='flex items-center' onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        )
      }}
    </ThemeConsumer>
  )
}

export default Theme