import { useNavigate, useSearchParams } from "react-router-dom"
import { FaCopy } from 'react-icons/fa';
import { useNotification } from "../../services/notification/NotificationService";
import { useEffect } from "react";
import LinkButton from "../Buttons/LinkButton";
import GhostButton from "../Buttons/GhostButton";

const Success = () => {

  const { setNotification } = useNotification()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')
  const orderID = searchParams.get('merchant_order_id')

  const handleCopy = () => {
    navigator.clipboard.writeText(orderID)
    setNotification('info', `Código copiado al portapapeles`)
  }

  useEffect(() => {
    if(!orderID || !status) navigate('/cart')
  })

  if(orderID && status === 'approved') return (
    <section>
        <div className="border border-primary-color p-12 grid gap-4 mx-4 my-16 max-w-[700px] lg:mx-auto">
          <h2 className="text-2xl font-semibold mb-4">¡Muchas gracias!</h2>
          <p>Su orden ha sido generada exitosamente</p>
          <div>
              <p className="mb-4">ID de la orden:
                <span className="font-semibold"> {orderID}</span>
                <GhostButton handleClick={handleCopy} square={true} classes="ml-1 px-2" ><FaCopy /></GhostButton>
              </p>
              <LinkButton url='/'>Volver al inicio</LinkButton>
          </div>
        </div>
    </section>
)
}

export default Success
