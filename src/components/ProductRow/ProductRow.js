import { MdOutlineEditNote } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const ProductRow = ({ title, author, description, lang, code, price, status, stock, categories, thumbnails, owner }) => {
  return (
    <tr>
      <td><img src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`} alt={title} width={50} ></img></td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{`${description.slice(0, 40)}...`}</td>
      <td>{lang}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td>{categories.join(', ')}</td>
      <td>{owner}</td>
      <td><MdOutlineEditNote size={25} className='mx-auto' /></td>
      <td><FaTrash size={15} className='mx-auto' /></td>
    </tr>
  )
}

export default ProductRow
