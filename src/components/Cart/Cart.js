import { useState, useEffect, useContext } from "react";
import CartItem from "../CartItem/CartItem"
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { CartContext } from "../../context/CartContext";
// import { purchase } from "../../services/axios/cartService";

const Cart = () => {

    const { cart, clearCart, total, loading, prepareCheckout } = useContext(CartContext)
    const [ isEmpty, setIsEmpty ] = useState(true)
    const navigate = useNavigate()

    console.log({cart})

    useEffect(() => {
        document.title = 'Carrito de compras'
    })

    useEffect(() => {
        cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }, [cart])

    const handlePurchase = async () => {
        await prepareCheckout()
        navigate('/checkout')
    }

    if(loading) return <Loader />

    if(isEmpty) return (
        <section className="h-[85vh]">
            <h2>Carrito de compras</h2>
            <div>
                <h2>El carrito está vacío</h2>
                <Link to='/books' className='btn btn-outline mt-4 normal-case'>Comenzá a agregar productos</Link>
            </div>
        </section>
    )

    return (
        <section className="min-h-[85vh]">
            <h2 className="font-heading text-2xl font-medium mb-4">Carrito de compras</h2>
            <div>
                { cart.length > 0 && cart.map(prod => <CartItem key={prod._id} {...prod} /> ) }
            </div>
            <div className="flex justify-between items-center mx-auto w-11/12 lg:w-4/5 max-w-[850px]">
                <button onClick={clearCart} className="btn btn-sm btn-ghost normal-case font-medium transition duration-300">Vaciar carrito</button>
                <h2 className="text-xl font-bold mr-8">Total: ${total}</h2>
            </div>
            <button onClick={handlePurchase}>Finalizar compra</button>
        </section>
    )
}

export default Cart