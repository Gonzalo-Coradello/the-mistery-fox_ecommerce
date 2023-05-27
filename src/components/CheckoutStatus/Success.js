import { Link, useNavigate } from "react-router-dom"
import { FaCopy } from 'react-icons/fa';
import { useNotification } from "../../services/notification/NotificationService";
import { useCartContext } from "../../context/CartContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const Success = () => {

  const { preferenceId, ticket, loading, finishCheckout } = useCartContext()
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  if(!preferenceId) navigate('/cart')

  const handleCopy = () => {
    navigator.clipboard.writeText(ticket.id)
    setNotification('info', `Código copiado al portapapeles`)
  }

  useEffect(() => {
    const fn = async () => await finishCheckout()
    fn()
  })
  
  if(!preferenceId) navigate('/cart')
  if(loading) return <Loader />

  if(ticket) return (
    <section className="mt-8 border border-primary-color p-12 grid gap-4 mx-4 max-w-[700px] lg:mx-auto">
        <h2 className="text-2xl font-semibold mb-4">¡Muchas gracias!</h2>
        <p>Su orden ha sido generada exitosamente</p>
        <div>
            <p>ID de la orden:
              <span className="font-semibold"> {ticket.id} </span>
              <button className="btn btn-sm btn-ghost ml-1 px-2" onClick={handleCopy}><FaCopy /></button>
            </p>
            <Link to='/' className='normal-case btn btn-outline mt-6'>Volver al inicio</Link>
        </div>
    </section>
)
}

export default Success
