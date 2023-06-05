import { useLocation, useSearchParams } from 'react-router-dom'
import LinkButton from '../Buttons/LinkButton'
import Product from '../../services/axios/productService'
import useAsync from '../../hooks/useAsync'
import { useEffect, useState } from 'react'
import ProductsTable from '../ProductsTable/ProductsTable'
import { useSessionContext } from '../../context/UserContext'
const productService = new Product()

const ManageProducts = () => {
  const { user } = useSessionContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const queries = location.search
  const page = searchParams.get('page')
  const [sort, setSort] = useState({})
  const [category, setCategory] = useState('')

  const getProducts = () => user.role === 'admin' ? productService.getProductsWithQueries(searchParams) : productService.getOwnProducts(searchParams, user.email)
  const { data, error, loading, prevPage, nextPage } = useAsync(getProducts, [
    searchParams,
  ])
  const products = data.docs

  useEffect(() => {
    document.title = 'Administrar productos'
  }, [])

  const handleCategory = e => {
    setCategory(e.target.value)
    setSearchParams({ category: e.target.value })
    setSort({})
  }

  const handleSort = col => {
    const params =
      sort.col === col
        ? sort.order === 'asc'
          ? { col, order: 'desc' }
          : {}
        : { col, order: 'asc' }

    setSort(params)
    setCategory('')
    if (params.col) {
      setSearchParams({ sort: params.col, sort_order: params.order })
    } else {
      setSearchParams([])
    }
  }

  if (error)
    return (
      <div>
        <h2>Hubo un error</h2>
        <p>{error.toString()}</p>
      </div>
    )

  return (
    <section className='w-11/12 mx-auto min-h-[85vh]'>
      <h2 className='text-2xl font-bold mt-8'>Administrar productos</h2>
      <div className='flex justify-between my-4'>
        <select name="category" onChange={handleCategory} value={category} className="select select-bordered border-primary w-fit max-w-xs">
          <option value="">Todas las categorías</option>
          <option value="novela">Novelas</option>
          <option value="cuento">Cuentos</option>
          <option value="romance">Romance</option>
          <option value="fantasia">Fantasía</option>
          <option value="terror">Terror</option>
          <option value="teatral">Teatro</option>
          <option value="ciencia-ficcion">Ciencia ficción</option>
          <option value="policial">Policial</option>
          <option value="aventura">Aventura</option>
          <option value="juvenil">Juvenil</option>
          <option value="coleccion">Colecciones</option>
        </select>
        <LinkButton url='/products/create' classes='w-max mt-0'>
          Crear producto
        </LinkButton>
      </div>

      {
        products?.length === 0 
          ?  user.role === 'premium' ? <p>Tu cuenta aún no tiene productos.</p> : <p>No se encontraron productos.</p>
          : <ProductsTable products={products} sort={sort} handleSort={handleSort} loading={loading} user={user} />
      }
      
      <div className='space-x-8 mt-4'>
        {prevPage[0] && (
          <LinkButton
            url={queries.replace(`page=${page}`, `page=${prevPage[1]}`)}>
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
            }>
            Siguiente
          </LinkButton>
        )}
      </div>
    </section>
  )
}

export default ManageProducts
