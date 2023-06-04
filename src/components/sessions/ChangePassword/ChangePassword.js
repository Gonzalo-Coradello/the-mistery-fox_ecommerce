import { useState } from 'react'
import { useNotification } from '../../../services/notification/NotificationService'
import Button from '../../Buttons/Button'
import User from '../../../services/axios/userService'
import { useParams } from 'react-router-dom'
import LinkButton from '../../Buttons/LinkButton'
import Loader from '../../Loader/Loader'
const userService = new User()

const ChangePassword = () => {
  const [data, setData] = useState({ newPassword: '', confirmation: '' })
  const [passwordChanged, setPasswordChanged] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { setNotification } = useNotification()
  const { id, token } = useParams()

  const handleChange = e => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleClick = async e => {
    e.preventDefault()
    setLoading(true)
    const response = await userService.changePassword(
      id,
      token,
      data.newPassword,
      data.confirmation
    )
    console.log(response)
    if (response.status === 'error') {
      setError(response.error)
      setNotification('error', 'Parece que hubo un error')
    } else if (response.status === 'success') {
      setNotification('success', 'Nueva contraseña establecida')
      setPasswordChanged(true)
    }
    setLoading(false)
  }

  return (
    <section>
      <h2 className='text-2xl mt-12 mb-8'>Restablecer contraseña</h2>

      {loading ? (
        <div className='w-fit mx-auto'>
          <Loader spinner={true} />
        </div>
      ) : passwordChanged ? (
        <>
          <p>Tu contraseña ha sido actualizada</p>
          <LinkButton url='/sessions/login'>Iniciar sesión</LinkButton>
        </>
      ) : (
        <form action='/sessions/password_reset/{{uid}}/{{token}}' method='post'>
          <input
            required
            type='password'
            name='newPassword'
            placeholder='Nueva contraseña'
            value={data.newPassword}
            onChange={handleChange}
            className='input input-bordered border-white w-full max-w-xs mb-2 block mx-auto'
          />
          <input
            required
            type='password'
            name='confirmation'
            placeholder='Confirmar contraseña'
            value={data.confirmation}
            onChange={handleChange}
            className='input input-bordered border-white w-full max-w-xs mb-2 block mx-auto'
          />
          {error ? (
            <>
              <p className='text-zinc-500 mt-2'>{error}</p>
              <Button classes='btn-disabled'>Enviar</Button>
            </>
          ) : (
            <Button handleClick={handleClick}>Enviar</Button>
          )}
        </form>
      )}
    </section>
  )
}

export default ChangePassword
