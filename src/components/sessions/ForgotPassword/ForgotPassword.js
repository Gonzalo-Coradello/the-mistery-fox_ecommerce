import { useState } from 'react'
import Button from '../../Buttons/Button'
import User from '../../../services/axios/userService'
import { isValidEmail } from '../../../services/mailValidation'
import { useNotification } from '../../../services/notification/NotificationService'
import Loader from '../../Loader/Loader'
const userService = new User()

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setNotification } = useNotification()

  const handleChange = e => {
    setEmail(e.target.value)
    isValidEmail(e.target.value) ? setError(false) : setError(true)
  }

  const handleClick = async e => {
    e.preventDefault()
    setLoading(true)
    const response = await userService.sendPasswordEmail(email)
    if (response.status === 'success') setEmailSent(true)
    else setNotification('error', 'Hubo un error al enviar el email')
    setLoading(false)
  }

  return (
    <section className='min-h-[85vh]'>
      <h2 className='text-2xl mt-12 mb-8'>Restablecer contraseña</h2>

      {loading ? (
        <div className='mx-auto w-fit'>
          <Loader spinner={true} />
        </div>
      ) : emailSent ? (
        <p>
          Enviamos un correo a {email}. Ingresá al link para restablecer la
          contraseña.
        </p>
      ) : (
        <form action='/sessions/password_reset' method='post'>
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={handleChange}
            className='input input-bordered border-white w-full max-w-xs block mx-auto'
          />
          {error ? (
            <>
              <p className='text-zinc-500 mt-2'>Ingrese un correo válido</p>
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

export default ForgotPassword
