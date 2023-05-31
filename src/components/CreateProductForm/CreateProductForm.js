import { useState } from 'react'
import Select from 'react-select'
import Button from '../Buttons/Button'
import Product from '../../services/axios/productService'
import { useNotification } from '../../services/notification/NotificationService'
import { useNavigate } from 'react-router-dom'
const productService = new Product()

export const options = [
  { value: 'romance', label: 'Romance' },
  { value: 'fantasia', label: 'Fantasía' },
  { value: 'terror', label: 'Terror' },
  { value: 'teatral', label: 'Teatral' },
  { value: 'ciencia-ficcion', label: 'Ciencia Ficción' },
  { value: 'policial', label: 'Policial' },
  { value: 'aventura', label: 'Aventura' },
  { value: 'juvenil', label: 'Juvenil' },
  { value: 'coleccion', label: 'Colecciones' },
  { value: 'novela', label: 'Novelas' },
  { value: 'cuento', label: 'Cuentos y relatos' },
]

const CreateProductForm = () => {
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    event: 'product',
    title: '',
    author: '',
    description: '',
    lang: '',
    code: '',
    price: '',
    stock: '',
    categories: [],
    file: '',
  })

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelect = e => {
    if (Array.isArray(e)) {
      const categories = e.map(obj => obj.value)
      setFormData(prev => ({ ...prev, categories }))
    } else {
      setFormData(prev => ({ ...prev, lang: e.value }))
    }
  }

  const handleFile = e => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const product = await productService.createProduct(formData)
    if (product) {
      setNotification('success', '¡Producto creado correctamente!')
      navigate(`/detail/${product._id}`)
    }
  }

  return (
    <section>
      <div className='mt-8'>
        <h2 className='text-3xl'>Crear producto</h2>
        <div className='px-4 max-w-[80vw] mx-auto'>
          <form>
            <div className='grid lg:grid-cols-3 gap-4 justify-center my-8'>
              <div>
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
                <input
                  required
                  type='text'
                  name='description'
                  placeholder='Descripción'
                  value={formData.description}
                  onChange={handleChange}
                  className='input input-bordered w-full max-w-xs border-primary'></input>
              </div>
              <div>
                <Select
                  options={[
                    { value: 'es', label: 'Español' },
                    { value: 'en', label: 'Inglés' },
                  ]}
                  isMulti={false}
                  required={true}
                  name='lang'
                  placeholder='Idioma'
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
                <input
                  required
                  type='text'
                  name='code'
                  placeholder='Código'
                  value={formData.code}
                  onChange={handleChange}
                  className='input input-bordered w-full max-w-xs border-primary'></input>
              </div>
              <div>
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
                <Select
                  options={options}
                  isMulti={true}
                  required={true}
                  name='categories'
                  placeholder='Categorías'
                  onChange={handleSelect}
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
                <input
                  required
                  type='file'
                  name='file'
                  placeholder='Imágenes'
                  onChange={handleFile}
                  className='input input-bordered w-full max-w-xs border-primary pt-[0.7rem]'></input>
              </div>
            </div>
            <Button handleClick={handleSubmit}>Crear</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateProductForm
