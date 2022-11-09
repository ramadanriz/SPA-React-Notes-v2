import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../components/RegisterInput'
import { register } from '../utils/api'
import LocaleContext from '../context/LocaleContext'
 
const RegisterPage = () => {
  const { locale } = React.useContext(LocaleContext)
  const navigate = useNavigate()
  async function onRegisterHandler(user) {
    const { error } = await register(user)
    if (!error) {
      navigate('/')
    }
  }
 
  return (
    <section>
        <h2 className='text-2xl font-bold'>{locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
        <RegisterInput register={onRegisterHandler} />
        <p className='text-[16px] mt-4'>{locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to='/' className='underline'>{locale === 'id' ? 'Login di sini' : 'Login here'}</Link></p>
    </section>
  )
}
 
export default RegisterPage