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
    <div className='overflow-auto border border-base-300'>
      <table className='table table-zebra table-compact w-full text-center'>
        <thead>
          <tr>
            {tableHead.map(({ value, slug }) =>
              value ? (
                <th key={value}>
                  <button>{slug} </button>
                </th>
              ) : (
                <th key={slug} className='normal-case'>
                  {slug}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
