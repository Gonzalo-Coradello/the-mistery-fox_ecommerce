import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { BsCart2 } from 'react-icons/bs'
import Loader from "../Loader/Loader"

const CartWidget = () => {

    const { totalQuantity, loading } = useContext(CartContext)
    const navigate = useNavigate()

    if(loading) return <Loader text="" navbar={true} />

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