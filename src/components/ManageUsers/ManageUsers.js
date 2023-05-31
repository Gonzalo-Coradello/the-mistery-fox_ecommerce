import { useEffect } from 'react'
import UsersTable from '../UsersTable/UsersTable'
import useAsync from '../../hooks/useAsync'
import User from '../../services/axios/userService'
const userService = new User()

const ManageUsers = () => {
  useEffect(() => {
    document.title = 'Administrar usuarios'
  }, [])

  const { data: users, error, loading } = useAsync(userService.getAllUsers)

  console.log(users)

  if (error)
    return (
      <div>
        <h2>Hubo un error</h2>
        <p>{error.toString()}</p>
      </div>
    )

  return (
    <section className='w-11/12 mx-auto'>
      <h2 className='text-2xl font-bold mt-8'>Administrar usuarios</h2>
      <UsersTable
        users={users}
        // sort={sort}
        // handleSort={handleSort}
        loading={loading}
      />
    </section>
  )
}

export default ManageUsers
