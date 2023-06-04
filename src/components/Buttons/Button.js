const Button = ({ handleClick, children, classes }) => {
  return (
    <button onClick={handleClick} className={ `btn btn-outline mt-4 normal-case min-w-max transition duration-500 ${classes}` }>
      {children}
    </button>
  )
}

export default Button
