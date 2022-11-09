import React from 'react'
import PropTypes from 'prop-types'
 
class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
 
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      }
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault()
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='mt-4 flex flex-col'>
        <label htmlFor='Nama' className='text-2xl font-[100]'>Name</label>
        <input className='bg-transparent border-[3px] text-lg p-2 mt-2 mb-4 rounded-lg' type='text' value={this.state.name} onChange={this.onNameChange} />
        <label htmlFor='Email' className='text-2xl font-[100]'>Email</label>
        <input className='bg-transparent border-[3px] text-lg p-2 mt-2 mb-4 rounded-lg' type='email' value={this.state.email} onChange={this.onEmailChange} />
        <label htmlFor='Password' className='text-2xl font-[100]'>Password</label>
        <input className='bg-transparent border-[3px] text-lg p-2 mt-2 mb-4 rounded-lg' type='password' autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
        <button className='bg-dark text-2xl font-bold rounded-lg text-white p-3 dark:bg-white dark:text-dark transition duration-300'>Register</button>
      </form>
    )
  }
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}
 
export default RegisterInput