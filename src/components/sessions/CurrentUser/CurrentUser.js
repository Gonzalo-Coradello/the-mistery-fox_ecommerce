import { useEffect, useState } from 'react'
import { useSessionContext } from '../../../context/UserContext'
import Button from '../../Buttons/Button'
import { BsFillPersonFill } from 'react-icons/bs'

const CurrentUser = () => {
  const { user, logout } = useSessionContext()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    user.documents?.find(doc => doc.name === 'profile')
      ? setProfile(`${process.env.REACT_APP_urlBase}/images/profiles/${user.id}.png`)
      : setProfile(null)
  }, [user])

  return (
    <section>
      <h2 className='text-xl font-semibold'>Mi cuenta</h2>
      <div className='my-4 rounded-lg border border-primary-color w-fit p-8 mx-auto grid gap-2'>
        <div className='max-w-[200px] mx-auto my-4'>
          {profile 
            ? <img
                src={profile}
                alt={`Foto de perfil de ${user.first_name}`}
                className='rounded-full'
              />
            : <BsFillPersonFill size={200} className=' rounded-full p-4 bg-base-300' />
          }
        </div>
        <h2>
          <b>Nombre:</b> {user.first_name} {user.last_name}
        </h2>
        <h4>
          <b>Email:</b> {user.email}
        </h4>
        <h4>
          <b>Edad:</b> {user.age}
        </h4>
        <h4>
          <b>Rol:</b> {user.role}
        </h4>
      </div>

      <Button handleClick={logout}>Logout</Button>
    </section>
  )
}

export default CurrentUser
