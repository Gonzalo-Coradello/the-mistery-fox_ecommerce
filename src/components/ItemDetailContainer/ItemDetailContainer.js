import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import useAsync from '../../hooks/useAsync'
import Product from '../../services/axios/productService'
import GhostButton from '../Buttons/GhostButton'
const productService = new Product()

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const getProductById = () => productService.getOneProduct(productId)
  const {
    data: product,
    error,
    loading,
  } = useAsync(getProductById, [productId])

  useEffect(() => {
    document.title = loading
      ? 'Cargando'
      : `${product.title}, de ${product.author}`
  }, [product]) // eslint-disable-line

  if (loading) return <Loader />

  if (error)
    return (
      <div>
        <h2>Hubo un error</h2>
        <p>{error.toString()}</p>
      </div>
    )

  return (
    <section>
      <h2 className='text-xl font-heading font-medium mb-2'>
        Detalles del producto
      </h2>
      <GhostButton handleClick={() => navigate(-1)}>Volver</GhostButton>
      <ItemDetail {...product} />
    </section>
  )
}

export default ItemDetailContainer
