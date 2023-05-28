import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import useAsync from '../../hooks/useAsync'
import Categories from '../Categories/Categories'
import Product from '../../services/axios/productService'
import LinkButton from '../Buttons/LinkButton'
const productService = new Product()

const ItemListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const queries = location.search
  const page = searchParams.get('page')

  const getProducts = () => productService.getProductsWithQueries(searchParams)
  const { data, error, loading, prevPage, nextPage } = useAsync(getProducts, [
    searchParams,
  ])
  const products = data.docs

  useEffect(() => {
    document.title = 'Listado de productos'
  }, [])

  const handleCategory = selectedCategory => {
    setSearchParams({ category: selectedCategory })
  }

  if (loading) return <Loader />

  if (error)
    return (
      <div>
        <h2>Hubo un error</h2>
        <p>{error.toString()}</p>
      </div>
    )

  return (
    <section className='bg-base-100'>
      <Categories handleClick={handleCategory} />
      <h1 className='text-3xl mb-8 mt-8'>Todos nuestros libros</h1>
      <ItemList products={products} />
      <div className='space-x-8 mt-4'>
        {prevPage[0] && (
          <LinkButton url={queries.replace(`page=${page}`, `page=${prevPage[1]}`)}>
            Anterior
          </LinkButton>
        )}
        {nextPage[0] && (
          <LinkButton
            url={
              page
                ? queries.replace(`page=${page}`, `page=${nextPage[1]}`)
                : queries
                ? `${queries.concat(`&page=${nextPage[1]}`)}`
                : `${queries.concat(`?page=${nextPage[1]}`)}`
            }
          >
            Siguiente
          </LinkButton>
        )}
      </div>
    </section>
  )
}

export default ItemListContainer
