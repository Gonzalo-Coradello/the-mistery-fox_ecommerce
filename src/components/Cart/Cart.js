import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, clearCart, total } = useContext(CartContext)
    const [ isEmpty, setIsEmpty ] = useState(true)

    useEffect(() => {
        document.title = 'Carrito de compras'
    })

    useEffect(() => {
        cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }, [cart])

    if(isEmpty) return (
        <section className="h-[85vh]">
            <h2>Carrito de compras</h2>
            <div>
                <h2>El carrito está vacío</h2>
                <Link to='/' className='btn'>Comenzá a agregar productos</Link>
            </div>
        </section>
    )

    return (
        <section className="h-[85vh]">
            <h2>Carrito de compras</h2>
            <div>
                { cart.map(prod => <CartItem key={prod.id} {...prod} /> ) }
            </div>
            <div className="flex justify-between mx-auto w-11/12 lg:w-4/5 max-w-[850px]">
                <button onClick={clearCart} className="btn btn-sm btn-ghost">Vaciar carrito</button>
                <h2 className="font-semibold">Total: ${total}</h2>
            </div>
            <Link to='/checkout' className='btn'>Finalizar compra</Link> 
        </section>
    )
}

export default Cart