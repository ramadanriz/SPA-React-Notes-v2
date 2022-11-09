import React from 'react'
import { SiGoogletranslate } from 'react-icons/si'
import { LocaleConsumer } from '../context/LocaleContext'
import Theme from './Theme'

const Navbar = () => {
  return (
    <LocaleConsumer>
      {
        ({ toggleLocale }) => {
          return (
            <nav className='flex items-center justify-between'>
              <ul className='flex items-center justify-between text-3xl'>
                <li><button onClick={toggleLocale} className='flex items-center'><SiGoogletranslate /></button></li>
                <li><Theme /></li>
              </ul>
            </nav>
          )
        }
      }
    </LocaleConsumer>
  )
}

export default Navbar