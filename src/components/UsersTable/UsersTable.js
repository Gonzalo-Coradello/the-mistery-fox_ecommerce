import Loader from '../Loader/Loader'
import UserRow from '../UserRow/UserRow'

const tableHead = [
  { value: 'first_name', slug: 'Nombre' },
  { value: 'last_name', slug: 'Apellido' },
  { value: 'email', slug: 'Email' },
  { value: 'role', slug: 'Rol' },
]

const UsersTable = ({ users, loading }) => {
  if (loading) return <Loader />

  return (
    <div className='overflow-auto border border-base-300 my-4'>
      <table className='table table-zebra table-compact w-full text-center'>
        <thead>
          <tr>
            {tableHead.map(({ value, slug }) => (
                <th key={value} className='normal-case'>
                  {slug}
                </th>
              )
            )}
            <th className='normal-case'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.email} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
