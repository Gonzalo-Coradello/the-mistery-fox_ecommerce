import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { FaCopy } from 'react-icons/fa';
import { useNotification } from "../../services/notification/NotificationService";
import { useEffect } from "react";

const Success = () => {

  const { setNotification } = useNotification()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const preferenceId = searchParams.get('preference_id')
  const status = searchParams.get('status')
  const orderID = searchParams.get('merchant_order_id')

  const handleCopy = () => {
    navigator.clipboard.writeText(orderID)
    setNotification('info', `Código copiado al portapapeles`)
  }

  useEffect(() => {
    if(!preferenceId || !status) navigate('/cart')
  })

  if(preferenceId && status === 'approved') return (
    <section>
        <div className="border border-primary-color p-12 grid gap-4 mx-4 mt-8 max-w-[700px] lg:mx-auto">
          <h2 className="text-2xl font-semibold mb-4">¡Muchas gracias!</h2>
          <p>Su orden ha sido generada exitosamente</p>
          <div>
              <p>ID de la orden:
                <span className="font-semibold"> {orderID} </span>
                <button className="btn btn-sm btn-ghost ml-1 px-2" onClick={handleCopy}><FaCopy /></button>
              </p>
              <Link to='/' className='normal-case btn btn-outline mt-6'>Volver al inicio</Link>
          </div>
        </div>
    </section>
)
}

export default Success
