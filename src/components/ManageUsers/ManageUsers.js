import { useEffect } from 'react'
import UsersTable from '../UsersTable/UsersTable'
import useAsync from '../../hooks/useAsync'
import User from '../../services/axios/userService'
import Button from '../Buttons/Button'
import { useNotification } from '../../services/notification/NotificationService'
import { useNavigate } from 'react-router-dom'
const userService = new User()

const ManageUsers = () => {
  useEffect(() => {
    document.title = 'Administrar usuarios'
  }, [])

  const navigate = useNavigate()
  const { setNotification } = useNotification()

  const { data: users, error, loading } = useAsync(userService.getAllUsers)

  const handleDelete = async () => {
    const result = await userService.deleteInactiveUsers()
    if(result) {
      setNotification('info', 'Se eliminaron los usuarios inactivos')
      navigate(0)
    }
  }

  if (error)
    return (
      <div>
        <h2>Hubo un error</h2>
        <p>{error.toString()}</p>
      </div>
    )

  return (
    <section className='w-11/12 mx-auto min-h-[85vh]'>
      <h2 className='text-2xl font-bold mt-8'>Administrar usuarios</h2>
      <UsersTable
        users={users}
        loading={loading}
      />
      <Button handleClick={handleDelete}>Eliminar usuarios inactivos</Button>
    </section>
  )
}

export default ManageUsers
