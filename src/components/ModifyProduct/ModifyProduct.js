import { useNavigate, useParams } from 'react-router-dom'
import Product from '../../services/axios/productService'
import useAsync from '../../hooks/useAsync'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import Button from '../Buttons/Button'
import Select from 'react-select'
import { options } from '../CreateProductForm/CreateProductForm'
import { useNotification } from '../../services/notification/NotificationService'
const productService = new Product()

const ModifyProduct = () => {
  const { productId } = useParams()
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    lang: { value: '', label: '' },
    price: '',
    stock: '',
    categories: [{ value: '', label: '' }],
  })

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

  useEffect(() => {
    if (loading) return
    const categoriesInput = []
    product.categories.forEach(cat => {
      const category = options.find(opt => opt.value === cat)
      categoriesInput.push(category)
    })
    const lang =
      product.lang === 'es'
        ? { value: 'es', label: 'Español' }
        : { value: 'en', label: 'Inglés' }
    setFormData({ ...product, categories: categoriesInput, lang })
  }, [product, loading])

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelect = e => {
    if (Array.isArray(e)) {
      setFormData(prev => ({ ...prev, categories: e }))
    } else {
      setFormData(prev => ({ ...prev, lang: e }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      ...formData,
      lang: formData.lang.value,
      categories: formData.categories.map(cat => cat.value),
    }
    const response = await productService.updateProduct(productId, data)
    if (response) {
      setNotification('success', 'Producto modificado correctamente')
      navigate('/products')
    }
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
    <section>
      <h2 className='text-2xl font-bold mt-4'>Editar producto</h2>
      <div className='px-4 max-w-[80vw] mx-auto'>
        <form>
          <div className='grid lg:grid-cols-3 gap-4 justify-center my-8'>
            <div>
              <label>Título</label>
              <input
                required
                type='text'
                name='title'
                placeholder='Título'
                value={formData.title}
                onChange={handleChange}
                className='input input-bordered w-full max-w-xs border-primary'></input>
            </div>
            <div>
              <label>Autor</label>
              <input
                required
                type='text'
                name='author'
                placeholder='Autor'
                value={formData.author}
                onChange={handleChange}
                className='input input-bordered w-full max-w-xs border-primary'></input>
            </div>
            <div>
              <label>Idioma</label>
              <Select
                options={[
                  { value: 'es', label: 'Español' },
                  { value: 'en', label: 'Inglés' },
                ]}
                isMulti={false}
                required={true}
                name='lang'
                placeholder='Idioma'
                value={formData.lang}
                onChange={handleSelect}
                classNames={{
                  container: () =>
                    'input-bordered w-full max-w-xs mx-auto min-h-12 grid',
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    boxShadow: 'none',
                  }),
                  container: baseStyles => ({
                    ...baseStyles,
                    border: '1px solid #FFF',
                    borderRadius: '0.5rem',
                  }),
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: '#1b2213',
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? '#243016' : '#1b2213',
                  }),
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: '#9aa1ac',
                    paddingLeft: '0.25rem',
                  }),
                  singleValue: baseStyles => ({
                    ...baseStyles,
                    color: '#FFF',
                  }),
                }}
              />
            </div>
            <div>
              <label>Precio</label>
              <input
                required
                type='number'
                name='price'
                placeholder='Precio'
                value={formData.price}
                onChange={handleChange}
                className='input input-bordered w-full max-w-xs border-primary'></input>
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type='number'
                name='stock'
                placeholder='Stock'
                value={formData.stock}
                onChange={handleChange}
                className='input input-bordered w-full max-w-xs border-primary'></input>
            </div>
            <div>
              <label htmlFor=''>Categorías</label>
              <Select
                options={options}
                isMulti={true}
                required={true}
                name='categories'
                placeholder='Categorías'
                // defaultValue={getCategories}
                onChange={handleSelect}
                value={formData.categories}
                classNames={{
                  container: () =>
                    'input-bordered w-full max-w-xs mx-auto min-h-12 grid',
                  multiValueRemove: () =>
                    'btn btn-ghost btn-xs btn-circle m-[2px]',
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    boxShadow: 'none',
                  }),
                  container: baseStyles => ({
                    ...baseStyles,
                    border: '1px solid #FFF',
                    borderRadius: '0.5rem',
                  }),
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: '#1b2213',
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? '#243016' : '#1b2213',
                  }),
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: '#9aa1ac',
                    paddingLeft: '0.25rem',
                  }),
                  multiValue: baseStyles => ({
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    border: '1px solid #FFF',
                    borderRadius: '1rem',
                    padding: '3px',
                  }),
                  multiValueLabel: baseStyles => ({
                    ...baseStyles,
                    color: '#FFF',
                  }),
                  multiValueRemove: (baseStyles, state) => ({}),
                }}
              />
            </div>
            <div>
              <label>Descripción</label>
              <textarea
                required
                type='text'
                name='description'
                placeholder='Descripción'
                value={formData.description}
                onChange={handleChange}
                className='input input-bordered w-full max-w-xs h-40 border-primary'></textarea>
            </div>
          </div>
          <Button handleClick={handleSubmit}>Guardar</Button>
        </form>
      </div>
    </section>
  )
}

export default ModifyProduct
