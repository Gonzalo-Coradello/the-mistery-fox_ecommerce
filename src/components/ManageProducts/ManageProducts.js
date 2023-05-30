import { useLocation, useSearchParams } from "react-router-dom"
import LinkButton from "../Buttons/LinkButton"
import Product from "../../services/axios/productService"
import useAsync from "../../hooks/useAsync"
import { useEffect } from "react"
import Loader from "../Loader/Loader"
import ProductsTable from "../ProductsTable/ProductsTable"
const productService = new Product()

const ManageProducts = () => {

  const [searchParams] = useSearchParams()
  const location = useLocation()
  const queries = location.search
  const page = searchParams.get('page')

  const getProducts = () => productService.getProductsWithQueries(searchParams)
  const { data, error, loading, prevPage, nextPage } = useAsync(getProducts, [
    searchParams,
  ])
  const products = data.docs

  useEffect(() => {
    document.title = 'Administrar productos'
  }, [])

  // const handleCategory = selectedCategory => {
  //   setSearchParams({ category: selectedCategory })
  // }

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
      <h2>Administrar productos</h2>
      <LinkButton url='/products/create' classes='w-max' >Crear producto</LinkButton>


      {/* <Categories handleClick={handleCategory} /> */}
      <ProductsTable products={products} />
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

export default ManageProducts
