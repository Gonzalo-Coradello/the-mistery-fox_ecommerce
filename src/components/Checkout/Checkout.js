import { Link } from "react-router-dom"
import { FaCopy } from 'react-icons/fa';
import { NotificationContext } from "../../notification/NotificationService";
import { useContext } from "react";


const Checkout = ({ checkoutStatus, orderId, OutOfStockList, errorMsg }) => {

    const { setNotification } = useContext(NotificationContext)

    const handleCopy = () => {
        navigator.clipboard.writeText(orderId)
        setNotification('info', `Código copiado al portapapeles`)
    }

    if(checkoutStatus === 'success') {
        return (
            <div className="mt-8 border border-primary-color p-12 grid gap-4 mx-4 max-w-[700px] lg:mx-auto">
                <h2 className="text-2xl font-semibold mb-4">¡Muchas gracias!</h2>
                <p>Su orden ha sido generada exitosamente</p>
                <div>
                    <p>ID de la orden:
                        <span className="font-semibold"> {orderId}</span>
                        <button className="btn btn-sm btn-ghost ml-1 px-2" onClick={handleCopy}><FaCopy /></button>
                    </p>
                    <Link to='/' className='normal-case btn btn-outline mt-6'>Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if(checkoutStatus === 'outOfStock') {
        return (
            <div className="mt-8 border border-primary-color p-12 mx-4 max-w-[700px] lg:mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Los siguientes productos se encuentran fuera de stock:</h2>
                {OutOfStockList.map(prod => {
                    return (
                        <ul key={prod.id}>
                            <li className="list-disc text-lg font-semibold">{prod.title} <span className="font-light">({prod.author})</span></li>
                        </ul>
                    )
                })}
                <Link to='/cart' className='normal-case btn btn-outline mt-6'>Volver al carrito</Link>
            </div>
        )
    }

    if(checkoutStatus === 'error') {
        return (
            <div className="mt-8 border border-primary-color p-12 mx-4 max-w-[700px] lg:mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Ha ocurrido un error</h2>
                <p>{errorMsg}</p>
            </div>
        )
    }
}

export default Checkout