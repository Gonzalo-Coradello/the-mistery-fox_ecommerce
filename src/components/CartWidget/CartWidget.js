import { useNavigate } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import Loader from '../Loader/Loader'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const { totalQuantity, loading } = useCartContext()
  const navigate = useNavigate()

  if (loading) return <Loader text='' navbar={true} />

  if (totalQuantity >= 0)
    return (
      <div className='dropdown dropdown-end'>
        <label onClick={() => navigate('/cart')} tabIndex={0} className='btn btn-ghost btn-circle' >
          <div className='indicator'>
            <BsCart2 size={28} />
            <span className='badge badge-sm indicator-item'>
              {totalQuantity}
            </span>
          </div>
        </label>
      </div>
    )
}

export default CartWidget
