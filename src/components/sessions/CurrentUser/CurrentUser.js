import { useSessionContext } from '../../../context/UserContext'
import GhostButton from '../../Buttons/GhostButton'

const CurrentUser = () => {
  const { user, logout } = useSessionContext()

  return (
    <section>
      <h2>Mi cuenta</h2>
      <div className='my-4 rounded-lg border border-primary-color w-fit p-8 mx-auto grid gap-4'>
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

      <GhostButton handleClick={logout} >
        Logout
      </GhostButton>
    </section>
  )
}

export default CurrentUser
