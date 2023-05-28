import { useEffect, useState } from 'react'
import Checkout from '../Checkout/Checkout'
import { Wallet } from '@mercadopago/sdk-react'
import { useCartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
import LinkButton from '../Buttons/LinkButton'

const CheckoutContainer = () => {
  const { preferenceId, items, outOfStock, getCartProducts } = useCartContext()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = '¡Finalizá tu compra!'
  })

  useEffect(() => {
    const fn = async () => await getCartProducts()
    if (outOfStock) fn()
  }, []) // eslint-disable-line

  if (outOfStock)
    return (
      <section className='min-h-[85vh]'>
        <div className='mt-16 px-4'>
          <h2 className='text-xl font-semibold mb-4'>
            Los siguientes productos se encuentran fuera de stock:
          </h2>
          <ul className='mb-8'>
            {outOfStock.map(prod => (
              <li key={prod.id} className='list-disc list-inside text-md font-semibold'>{prod.title}
                <span className='font-light'> - {prod.author}</span>
              </li>
            ))}
          </ul>
          <LinkButton url='/cart'>Volver al carrito</LinkButton>
        </div>
      </section>
    )

  if (!preferenceId) navigate('/cart')

  const amount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  if (preferenceId)
    return (
      <section className='min-h-[85vh]'>
        <h2 className='font-heading text-2xl font-bold border-b w-fit mx-auto pb-4 px-14'>
          Checkout
        </h2>
        <Checkout items={items} amount={amount} />
        {!outOfStock && (
          <button>
            {loading && (
              <div className='grid justify-center mt-8'>
                <Loader spinner={true} />
              </div>
            )}
            <Wallet
              onReady={() => setLoading(false)}
              initialization={{ preferenceId, redirectMode: 'modal' }}
            />
          </button>
        )}
      </section>
    )
}

export default CheckoutContainer
