import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../services/firebase/firestore/orders"
import Checkout from '../Checkout/Checkout'
import Form from "../Form/Form"
import Loader from "../Loader/Loader"

const CheckoutContainer = () => {

    const [ loading, setLoading ] = useState(false)
    const [ checkoutStatus, setCheckoutStatus ] = useState()
    const [ orderId, setOrderId ] = useState()
    const [ OutOfStockList, setOutOfStockList ] = useState()
    const [ errorMsg, setErrorMsg ] = useState()
    const { cart, total, clearCart, removeItem } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = '¡Finalizá tu compra!'
    })

    const handleCheckout = ({ name, email, phone }) => {
        setLoading(true)
        const cartMap = cart.map(prod => {
            const { images: deletedImg, stock: deletedStock, selectedSize: deletedSize, ...restCart } = prod
            return restCart
        })

        const order = {
            client: {
                name,
                email,
                phone
            },
            items: cartMap,
            total: total,
        }

        createOrder(order, cart)
            .then(res => {
                if(Array.isArray(res)) {
                    const outOfStock = res
                    const idsArray = outOfStock.map(item => item.id)
                    idsArray.forEach(item => removeItem(item))
                    setCheckoutStatus('outOfStock')
                    setOutOfStockList(outOfStock)
                    setLoading(false)
                } else {

                    clearCart()

                    setTimeout(() => {
                        navigate('/')
                    }, 5000)

                    setCheckoutStatus('success')
                    setLoading(false)
                    setOrderId(res)
                } 
            })
            .catch(error => {
                setCheckoutStatus('error')
                setErrorMsg(error.toString())
                setLoading(false)
            })       
    }

    if(loading) {
        return <Loader text="Se está generando la orden" />
    }

    return (
        <section className="h-[85vh]">
            <h2 className="text-2xl font-semibold border-b border-primary-color w-fit mx-auto pb-4 px-14">Checkout</h2>
            <div>
                { checkoutStatus ?
                <Checkout checkoutStatus={checkoutStatus} orderId={orderId} OutOfStockList={OutOfStockList} errorMsg={errorMsg} /> :
                <Form handleCheckout={handleCheckout} />
                }
            </div>
        </section>
    )
    
    
}

export default CheckoutContainer