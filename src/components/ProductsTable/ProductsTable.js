import ProductRow from "../ProductRow/ProductRow"

const ProductsTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
      <td>Descripción</td>
      <td>Idioma</td>
      <td>Precio</td>
      <td>Stock</td>
      <td>Categorías</td>
      <td>Imagen</td>
      <td>Propietario</td>
        </tr>
      </thead>
      <tbody>
        { products.map(product => (
          <ProductRow key={product._id} { ...product } />
        )) }
      </tbody>
    </table>
  )
}

export default ProductsTable
