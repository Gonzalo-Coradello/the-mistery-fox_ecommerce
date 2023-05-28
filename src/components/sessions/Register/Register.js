import { useState } from 'react'
import { useSessionContext } from '../../../context/UserContext'
import { useNotification } from '../../../services/notification/NotificationService'
import Button from '../../Buttons/Button'
import { useNavigate } from 'react-router-dom'
import GhostLink from '../../Buttons/GhostLink'

const Register = () => {
  const { register } = useSessionContext()
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: '',
  })

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await register(formData)
    if(response.status !== 'success') {
      setNotification('error', 'Ha ocurrido un error')
      return
    }
    setNotification('success', '¡Registro exitoso!')
    navigate('/sessions/login')
  }

  return (
    <section>
      <h2 className='text-2xl mt-12 mb-8'>Registrar usuarios</h2>

      <form>
        <input
          required
          type='text'
          name='first_name'
          placeholder='Nombre'
          value={formData.first_name}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>
        <input
          required
          type='text'
          name='last_name'
          placeholder='Last name'
          value={formData.last_name}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>
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
          type='tel'
          name='age'
          placeholder='Age'
          value={formData.age}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>
        <input
          required
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='input input-bordered border-white w-full max-w-xs mb-2'
        />
        <br></br>

        <Button handleClick={handleSubmit}>Enviar</Button>
      </form>

      <p className='mt-8'>¿Ya estás registrado?</p>
      <p>
        <GhostLink url='/sessions/login' classes='font-semibold my-2'>
          Inicia sesión
        </GhostLink>
      </p>
    </section>
  )
}

export default Register
