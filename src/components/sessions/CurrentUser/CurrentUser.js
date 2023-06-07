import { useEffect, useState } from 'react'
import { useSessionContext } from '../../../context/UserContext'
import Button from '../../Buttons/Button'
import { BsFillPersonFill } from 'react-icons/bs'
import User from '../../../services/axios/userService'
import { useNotification } from '../../../services/notification/NotificationService'
import LinkButton from '../../Buttons/LinkButton'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'
const userService = new User()

const CurrentUser = () => {
  const { user, logout, updateRole } = useSessionContext()
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Mi cuenta'
  }, [])

  useEffect(() => {
    user.documents?.find(doc => doc.name === 'profile')
      ? setImage(`${process.env.REACT_APP_urlBase}/images/profiles/${user.id}.png`)
      : setImage(null)
  }, [user])

  const handleImage = async e => {
    setLoading(true)
    const file = e.target.files[0]
    const data = { event: 'profile', file }
    const response = await userService.uploadDocuments(user._id, data)
    if(response.status === 'success') {
      setImage(URL.createObjectURL(file))
      setNotification('success', 'Foto de perfil actualizada')
    } else {
      setNotification('error', 'Hubo un error al subir la imagen')
    }
    setLoading(false)
  }

  const handleRole = async () => {
    const response = await updateRole(user.id)
    if(response.status === 'success') {
      setNotification('success', 'Rol de usuario actualizado. Vuelva a iniciar sesión')
      navigate('/sessions/login')
    } 
  }

  return (
    <section>
      <h2 className='text-xl font-semibold'>Mi cuenta</h2>
      <div className='my-4 rounded-lg border border-primary-color w-fit p-8 mx-auto grid gap-2'>
        <div className='max-w-[200px] mx-auto my-4 relative rounded-full hover:brightness-75 transition-all duration-300'>
          {image 
            ? <img
                src={image}
                alt={`Foto de perfil de ${user.first_name}`}
                className='rounded-full w-full aspect-square object-cover'
              />
            : <BsFillPersonFill size={200} className=' rounded-full p-4 bg-base-300' />
          }
          <input type='file' accept='image/*' onChange={handleImage} className='absolute opacity-0 w-full h-full rounded-full inset-0 cursor-pointer' />
          { loading && (
            <div className='absolute w-full h-full rounded-full bg-black/70 inset-0 grid justify-center items-center'>
              <Loader spinner={true} />
            </div>
          )}
        </div>
        <div className='text-center space-y-2'>
          <p>
            <span className='font-bold'>Nombre:</span> {user.first_name} {user.last_name}
          </p>
          <p>
            <span className='font-bold'>Email:</span> {user.email}
          </p>
          <p>
            <span className='font-bold'>Edad:</span> {user.age}
          </p>
          <p>
            <span className='font-bold'>Rol:</span> {user.role}
          </p>
        </div>
        <div>
          {
            user.role === 'premium'
              ? <Button handleClick={handleRole}>Actualizar rol</Button>
              : <LinkButton url='/sessions/user/upgrade'>Volverse premium</LinkButton>
          }
        </div>
      </div>

      <Button handleClick={logout}>Logout</Button>
    </section>
  )
}

export default CurrentUser
