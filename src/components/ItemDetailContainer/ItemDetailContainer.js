import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import UserService from '../../services/axios/userService'
import useAsync from '../../hooks/useAsync'

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const getProductById = () => UserService.getOneProduct(productId)
  const { data: product, error, loading } = useAsync(getProductById, [productId])

  useEffect(() => {
    document.title = loading ? 'Cargando' : `${product.title}, de ${product.author}` }, [product]) // eslint-disable-line

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
      <h2 className='text-xl font-heading font-medium'>
        Detalles del producto
      </h2>
      <button
        className='btn btn-ghost btn-sm mt-1 normal-case font-medium'
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
      <ItemDetail {...product} />
    </section>
  )
}

export default ItemDetailContainer
