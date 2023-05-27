import { useEffect } from 'react'
import Checkout from '../Checkout/Checkout'
import { Wallet } from '@mercadopago/sdk-react'
import { useCartContext } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const CheckoutContainer = () => {
  const { preferenceId, items, outOfStock, finishCheckout } = useCartContext()
  const navigate = useNavigate()
  const amount = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (!preferenceId) navigate('/cart')

  useEffect(() => {
    document.title = '¡Finalizá tu compra!'
  })

  const handlePurchase = async () => {
    await finishCheckout(items)
  }

  if (outOfStock)
    return (
      <div>
        <h2 className='text-2xl font-semibold mb-4'>
          Los siguientes productos se encuentran fuera de stock:
        </h2>
        {outOfStock.map(prod => (
          <ul key={prod._id}>
            <li className='list-disc text-lg font-semibold'>
              {prod.title} <span className='font-light'>({prod.author})</span>
            </li>
          </ul>
        ))}
        <Link to='/cart'>Volver al carrito</Link>
      </div>
    )

  if (preferenceId)
    return (
      <section className='min-h-[85vh]'>
        <h2 className='font-heading text-2xl font-bold border-b w-fit mx-auto pb-4 px-14'>
          Checkout
        </h2>
        <Checkout items={items} amount={amount} />
        {!outOfStock && (
          <button onClick={handlePurchase}>
            <Wallet initialization={{ preferenceId, redirectMode: 'modal' }} />
          </button>
        )}
      </section>
    )
}

export default CheckoutContainer
