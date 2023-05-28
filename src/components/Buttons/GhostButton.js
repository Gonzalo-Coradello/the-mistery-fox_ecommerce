const GhostButton = ({ handleClick, children, rounded = false, square = false, classes }) => {
  return (
    <button onClick={handleClick} className={`btn btn-sm btn-ghost text-sm font-medium normal-case transition duration-500 ${ rounded ? 'btn-circle' : square ? 'btn-square' : null } ${ classes }`}>
      { children }
    </button>
  )
}

export default GhostButton
