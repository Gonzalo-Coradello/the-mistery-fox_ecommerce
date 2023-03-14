import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useLocation, useNavigate } from "react-router-dom"
import { CgShoppingCart } from 'react-icons/cg'
import { BsCart2 } from 'react-icons/bs'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    const navigate = useNavigate()
    const location = useLocation()

    if(totalQuantity >= 0) return(
        <div className="dropdown dropdown-end">
            <label onClick={() => navigate("/cart")} tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <BsCart2 size={28} />
                    <span className="badge badge-sm indicator-item">{ totalQuantity }</span>
                </div>
            </label>
        </div>
    )
}

export default CartWidget