const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className='btn btn-outline mt-4 normal-case transition duration-500'>
      {children}
    </button>
  )
}

export default Button
