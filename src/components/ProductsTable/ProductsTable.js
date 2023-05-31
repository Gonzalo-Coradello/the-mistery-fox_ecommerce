import Loader from '../Loader/Loader'
import ProductRow from '../ProductRow/ProductRow'

const tableHead = [
  { value: 'title', slug: 'Título' },
  { value: 'author', slug: 'Autor' },
  { value: null, slug: 'Descripción' },
  { value: 'lang', slug: 'Idioma' },
  { value: 'price', slug: 'Precio' },
  { value: 'stock', slug: 'Stock' },
  { value: null, slug: 'Categorías' },
  { value: 'owner', slug: 'Propietario' },
  { value: null, slug: 'Editar' },
  { value: null, slug: 'Eliminar' },
]

const ProductsTable = ({ products, sort, handleSort, loading }) => {
  if (loading) return <Loader />

  return (
    <div className='overflow-auto border border-base-300'>
      <table className='table table-zebra table-compact w-full text-center'>
        <thead>
          <tr>
            <th className='grid normal-case'>Imagen</th>
            {tableHead.map(({ value, slug }) =>
              value ? (
                <th key={value} onClick={() => handleSort(value)}>
                  <button>
                    {slug}{' '}
                    {sort.col === value
                      ? sort.order === 'asc'
                        ? '↑'
                        : '↓'
                      : null}
                  </button>
                </th>
              ) : (
                <th key={slug} className='normal-case'>
                  {slug}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow key={product._id} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
