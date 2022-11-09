import React from 'react'
import PropTypes from 'prop-types'
 
class LoginInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
 
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this)
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
 
  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      }
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault()
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='mt-4 flex flex-col'>
        <label htmlFor='Email' className='text-2xl font-[100]'>Email</label>
        <input className='bg-transparent border-[3px] text-lg p-2 mt-2 mb-4 rounded-lg' type='email' value={this.state.email} onChange={this.onEmailChangeHandler} />
        <label htmlFor='Password' className='text-2xl font-[100]'>Password</label>
        <input className='bg-transparent border-[3px] text-lg p-2 mt-2 mb-4 rounded-lg' type='password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
        <button className='bg-dark text-2xl font-bold rounded-lg text-white p-3 dark:bg-white dark:text-dark transition duration-300'>Login</button>
      </form>
    )
  }
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}
 
export default LoginInput