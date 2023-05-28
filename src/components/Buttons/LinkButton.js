import { Link } from 'react-router-dom'

const LinkButton = ({ url, children, classes }) => {
  return (
    <Link to={url} className={ `btn btn-outline mt-4 normal-case w-32 transition duration-500 ${classes}` }>
      {children}
    </Link>
  )
}

export default LinkButton
