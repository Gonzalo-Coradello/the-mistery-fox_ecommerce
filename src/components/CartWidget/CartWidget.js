import { BsCart2 } from 'react-icons/bs'
import Loader from '../Loader/Loader'
import { useCartContext } from '../../context/CartContext'
import GhostLink from '../Buttons/GhostLink'

const CartWidget = () => {
  const { totalQuantity, loading } = useCartContext()

  if (loading) return <Loader text='' spinner={true} />

  if (totalQuantity >= 0)
    return (
      <div>
        <GhostLink url='/cart' rounded={true} classes='btn-md' >
          <div className='indicator'>
            <BsCart2 size={28} />
            <span className='badge badge-sm indicator-item'>
              {totalQuantity}
            </span>
          </div>
        </GhostLink>
      </div>
    )
}

export default CartWidget
