import { useState } from 'react'
import User from '../../services/axios/userService'
import { useNotification } from '../../services/notification/NotificationService'
import { FaTrash } from 'react-icons/fa'
const userService = new User()

const UserRow = ({ first_name, last_name, email, role }) => {
  const [userRole, setUserRole] = useState(role)
  const [deleted, setDeleted] = useState(false)
  const { setNotification } = useNotification()

  const handleChange = async e => {
    const newRole = e.target.value
    setUserRole(newRole)
    const result = await userService.updateUser(email, { role: newRole })
    if (result) {
      setNotification('success', 'Rol del usuario actualizado')
    }
  }

  const handleDelete = async email => {
    const result = await userService.deleteUser(email)
    if(result) {
      setDeleted(true)
      setNotification('info', 'Usuario eliminado')
    }
  }

  if(!deleted) return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>
        <select
          name='role'
          onChange={handleChange}
          value={userRole}
          className='select select-xs select-bordered border-primary w-fit max-w-xs'>
          <option value='user'>Usuario</option>
          <option value='premium'>Premium</option>
          <option value='admin'>Administrador</option>
        </select>
      </td>
      <td>
        <button onClick={() => handleDelete(email)} className='hover:opacity-50 transition-all duration-300' >
          <FaTrash size={15} className='mx-auto' />
        </button>
      </td>
    </tr>
  )
}

export default UserRow
