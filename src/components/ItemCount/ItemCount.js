import { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import Button from '../Buttons/Button'
import GhostButton from '../Buttons/GhostButton'

const ItemCount = ({ stock, initial = 1, price, onAdd, inCart, id }) => {
  const [quantity, setQuantity] = useState(initial)
  const [currentStock, setCurrentStock] = useState()
  const { updateQuantityFromCart } = useCartContext()

  useEffect(() => {
    setCurrentStock(stock)
  }, [stock])

  const increment = () => {
    if (quantity < currentStock) {
      setQuantity(prev => prev + 1)
      if (inCart) updateQuantityFromCart(id, quantity + 1)
    }
  }

  const decrement = async () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
      if (inCart) updateQuantityFromCart(id, quantity - 1)
    }
  }

  const validateStock = () => {
    if (currentStock > 0 && currentStock - quantity >= 0) {
      setCurrentStock(currentStock - quantity)
      onAdd(quantity)
    }
  }

  return (
    <div className='w-full'>
      <div
        className={`flex justify-center items-center gap-2 lg:justify-between ${
          inCart ? 'flex-col' : null
        }`}>
        <div className='flex gap-4 justify-center items-center border rounded-lg p-1'>
          <GhostButton handleClick={decrement} square={true} >-</GhostButton>
          <h4 className='cursor-default font-medium text-sm sm:text-base'>
            {quantity}
          </h4>
          <GhostButton handleClick={increment} square={true} >+</GhostButton>
        </div>
        <h3
          className={`text-sm md:text-base font-semibold ${
            inCart ? 'md:text-base w-max mx-auto' : 'md:text-lg w-fit ml-auto'
          }`}>
          Total: ${price * quantity}
        </h3>
      </div>
      {!inCart && (
        <div className='mx-auto'>
          <Button handleClick={() => validateStock(quantity)}>
            Agregar al carrito
          </Button>
        </div>
      )}
    </div>
  )
}

export default ItemCount
