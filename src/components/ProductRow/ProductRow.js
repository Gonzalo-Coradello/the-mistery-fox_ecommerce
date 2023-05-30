const ProductRow = ({ title, author, description, lang, code, price, status, stock, categories, thumbnails, owner }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{`${description.slice(0, 140)}...`}</td>
      <td>{lang}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{categories.join(', ')}</td>
      <td><img src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`} alt={title} width={150} ></img></td>
      <td>{owner}</td>
    </tr>
  )
}

export default ProductRow
