import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionContext } from '../../../context/UserContext'
import { useNotification } from '../../../services/notification/NotificationService'
import Button from '../../Buttons/Button'
import GhostLink from '../../Buttons/GhostLink'
import Loader from '../../Loader/Loader'

const Login = () => {
  const { loginWithEmail } = useSessionContext()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Iniciar sesión'
  }, [])

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const response = await loginWithEmail(formData)
    if (!response || response.status !== 'success') {
      setNotification('error', 'Ha ocurrido un error')
      setLoading(false)
      return
    }
    const { first_name, last_name } = response.payload
    setNotification(
      'success',
      `Iniciaste sesión como ${first_name} ${last_name}`
    )
    setLoading(false)
    navigate('/books')
  }

  if(loading) return <Loader />

  return (
    <section>
      <h2 className='text-2xl mt-12 mb-8'>Iniciar sesión</h2>
      <form>
        <input
          required
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>
        <input
          required
          type='password'
          name='password'
          placeholder='Contraseña'
          value={formData.password}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>
        <Button type='submit' handleClick={handleSubmit}>
          Enviar
        </Button>
      </form>
      <p>
        <GhostLink url='/sessions/forgot_password' classes='font-semibold my-4'>
          Olvidé mi contraseña
        </GhostLink>
      </p>
      <p>¿No tenés cuenta?</p>
      <p>
        <GhostLink url='/sessions/register' classes='font-semibold mt-2'>
          Registrate
        </GhostLink>
      </p>
    </section>
  )
}

export default Login
