import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import InputNotePage from './pages/InputNotePage'
import DetailPage from './pages/DetailPage'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFound from './pages/NotFound'
import ArchivePage from './pages/ArchivePage'
import { LocaleProvider } from './context/LocaleContext'
import { ThemeProvider } from './context/ThemeContext'
import { RiLoginBoxLine } from 'react-icons/ri'
import { getUserLogged, putAccessToken } from './utils/api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id'
            localStorage.setItem('locale', newLocale)
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          })
        }
      },
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newTheme)
          return {
            theme: newTheme
          }
        })
      }
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-mode', this.state.theme)
    const { data } = await getUserLogged()
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-mode', this.state.theme)
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()

    this.setState(() => {
      return {
        authedUser: data,
      }
    })
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    })
    putAccessToken('')
  }

  render() {
    if (this.state.initializing) {
      return null
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <LocaleProvider value={this.state.localeContext}>
              <header className='border-b-[1px] p-4 flex justify-between'>
                <Link to='/' className='font-bold text-[32px] underline'>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
                <Navbar />
              </header>
              <div className='px-16 py-8'>
                <Routes>
                  <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path='/register' element={<RegisterPage />} />
                </Routes>
              </div>
          </LocaleProvider>
        </ThemeProvider>
      )
    }

    return (
        <ThemeProvider value={this.state}>
          <LocaleProvider value={this.state.localeContext}>
          <div>
            <header className='border-b-[1px] p-4 flex justify-between items-center'>
              <Link to='/' className='font-bold text-[32px] underline'>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
              <div className='flex items-center justify-between text-3xl'>
                <Link to='/archives' className='underline mr-2'>{this.state.localeContext.locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
                <Navbar />
                <button onClick={this.onLogout} className='flex items-center ml-2'><RiLoginBoxLine /> {this.state.authedUser.name}</button>
              </div>
            </header>

            <main className='px-16 py-8'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/new' element={<InputNotePage />} />
                <Route path='/note/:id' element={<DetailPage />} />
                <Route path='/archives' element={<ArchivePage />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
          </div>
          </LocaleProvider>
        </ThemeProvider>
    )
  }
}

export default App