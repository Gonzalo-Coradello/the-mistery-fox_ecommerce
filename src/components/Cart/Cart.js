import { useState, useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import LinkButton from '../Buttons/LinkButton'
import Loader from '../Loader/Loader'
import { useCartContext } from '../../context/CartContext'
import Button from '../Buttons/Button'
import GhostButton from '../Buttons/GhostButton'

const Cart = () => {
  const { cart, clearCart, total, loading, purchase } = useCartContext()
  const [isEmpty, setIsEmpty] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Carrito de compras'
  })

  useEffect(() => {
    cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
  }, [cart])

  const handlePurchase = async () => {
    await purchase()
    navigate('/checkout')
  }

  if (loading) return <Loader />

  if (isEmpty)
    return (
      <section className='h-[85vh]'>
        <h2>Carrito de compras</h2>
        <div>
          <h2>El carrito está vacío</h2>
          <LinkButton url='/books'>Comenzá a agregar productos</LinkButton>
        </div>
      </section>
    )

  return (
    <section className='min-h-[85vh]'>
      <h2 className='font-heading text-2xl font-medium mb-4'>
        Carrito de compras
      </h2>
      <div>
        {cart.length > 0 &&
          cart.map(prod => <CartItem key={prod._id} {...prod} />)}
      </div>
      <div className='flex justify-between items-center mx-auto w-11/12 lg:w-4/5 max-w-[850px]'>
        <GhostButton
          handleClick={clearCart}
          classses='transition duration-300'>
          Vaciar carrito
        </GhostButton>
        <h2 className='text-xl font-bold mr-8'>Total: ${total}</h2>
      </div>
      <Button onClick={handlePurchase}>Finalizar compra</Button>
    </section>
  )
}

export default Cart
