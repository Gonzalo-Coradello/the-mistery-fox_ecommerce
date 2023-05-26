import { useEffect } from "react"
import Checkout from '../Checkout/Checkout'
import { Wallet } from "@mercadopago/sdk-react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {

    const { preferenceId, ticket, outOfStock } = useCartContext()
    const navigate = useNavigate()

    console.log('PreferenceID: ', preferenceId)
    if(!preferenceId) navigate('/cart')

    useEffect(() => {
        document.title = '¡Finalizá tu compra!'
    })

    // if(loading) {
    //     return <Loader text="Se está generando la orden" />
    // }

    if(preferenceId) return (
        <section className="min-h-[85vh]">
            <h2 className="font-heading text-2xl font-bold border-b w-fit mx-auto pb-4 px-14">Checkout</h2>
            <Checkout ticket={ticket} outOfStock={outOfStock} />
            <Wallet initialization={{ preferenceId, redirectMode: 'modal' }} />
        </section>
    )
    
    
}

export default CheckoutContainer