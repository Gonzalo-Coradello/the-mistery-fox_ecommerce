const UserRow = ({ _id, first_name, last_name, email, role }) => {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  )
}

export default UserRow
