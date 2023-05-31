import { MdOutlineEditNote } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNotification } from '../../services/notification/NotificationService'
import Product from '../../services/axios/productService'
import { useSessionContext } from '../../context/UserContext'
const productService = new Product()

const ProductRow = ({
  _id,
  title,
  author,
  description,
  lang,
  price,
  stock,
  categories,
  thumbnails,
  owner,
}) => {
  const [deleted, setDeleted] = useState(false)
  const { setNotification } = useNotification()
  const { user } = useSessionContext()

  const handleDelete = async id => {
    const response = await productService.deleteProduct(id)
    if (response) {
      setDeleted(true)
      setNotification('info', 'Producto eliminado')
    }
  }

  const handleAuth = () => {
    setNotification('error', 'Sólo podés modificar tus propios productos')
  }

  if (!deleted)
    return (
      <tr>
        <td>
          <img
            src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`}
            alt={title}
            width={50}></img>
        </td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{`${description.slice(0, 40)}...`}</td>
        <td>{lang}</td>
        <td>${price}</td>
        <td>{stock}</td>
        <td>{categories.join(', ')}</td>
        <td>{owner}</td>
        <td>
          {user.role === 'admin' || owner === user.email ? (
            <Link to={`/products/edit/${_id}`}>
              <MdOutlineEditNote size={25} className='mx-auto' />
            </Link>
          ) : (
            <MdOutlineEditNote
              onClick={handleAuth}
              size={25}
              className='mx-auto'
              color='grey'
            />
          )}
        </td>
        <td>
          {user.role === 'admin' || owner === user.email ? (
            <button onClick={() => handleDelete(_id)}>
              <FaTrash size={15} className='mx-auto' />
            </button>
          ) : (
            <FaTrash
              onClick={handleAuth}
              size={15}
              className='mx-auto'
              color='grey'
            />
          )}
        </td>
      </tr>
    )
}

export default ProductRow
