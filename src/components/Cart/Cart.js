import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            { cart.map(prod => <CartItem key={prod.id} {...prod} /> ) }
        </div>
    )
}

export default Cart