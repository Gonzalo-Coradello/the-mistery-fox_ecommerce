import ItemCount from '../ItemCount/ItemCount'
import { useNotification } from '../../services/notification/NotificationService'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({
  _id,
  title,
  author,
  categories,
  description,
  thumbnails,
  price,
  stock,
  lang
}) => {
  const { setNotification } = useNotification()
  const { addItem } = useCartContext()

  const handleOnAdd = quantity => {
    addItem(_id, quantity)
    setNotification('success', '¡Producto añadido al carrito!')
  }

  return (
    <div className='card lg:card-side gap-4 w-4/5 px-4 lg:w-full xl:w-4/5 mx-auto mt-4'>
      <div className=' flex justify-center basis-1/2'>
        <img
          className='object-contain max-h-[500px] rounded-xl mt-6'
          src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`}
          alt={title}
        />
      </div>
      <div className='card-body px-0 pt-4 basis-1/2 gap-0 lg:px-6'>
        <h2 className='card-title mx-auto text-xl font-heading'>{title}</h2>
        <h3 className='text-base font-light text-primary/70'>{author}</h3>
        <p className='mt-4 text-sm'>{ lang === 'es' ? 'Español' : 'Inglés' }</p>
        <p className='mt-4 text-justify font-light'>{description}</p>
        <div className='mt-6'>
          <ItemCount
            stock={stock}
            initial={1}
            price={price}
            onAdd={handleOnAdd}
            inCart={false}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
