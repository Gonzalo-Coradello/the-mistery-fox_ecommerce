import { Link } from "react-router-dom"

const GhostLink = ({ url, children, rounded = false, square = false, classes }) => {
  return (
    <Link to={url} className={`btn btn-sm btn-ghost text-sm font-medium normal-case transition duration-500 ${ rounded ? 'btn-circle' : square ? 'btn-square' : null } ${ classes }`}>
      { children }
    </Link>
  )
}

export default GhostLink
