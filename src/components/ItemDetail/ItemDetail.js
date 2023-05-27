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
}) => {
  const { setNotification } = useNotification()
  const { addItem } = useCartContext()

  const handleOnAdd = quantity => {
    addItem(_id, quantity)
    setNotification('success', '¡Producto añadido al carrito!')
  }

  return (
    <div className='card lg:card-side gap-4 w-4/5 mx-auto mt-4'>
      <div className='max-h-[500px] flex justify-center basis-1/2'>
        <img
          className='object-cover h-full rounded-xl mt-6'
          src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`}
          alt={title}
        />
      </div>
      <div className='card-body px-0 basis-1/2 lg:px-6'>
        <h2 className='card-title mx-auto text-xl font-heading'>{title}</h2>
        <h3 className='text-base font-light'>{author}</h3>
        <p className='mt-4 text-justify font-light'>{description}</p>
        <div className='mt-4'>
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
