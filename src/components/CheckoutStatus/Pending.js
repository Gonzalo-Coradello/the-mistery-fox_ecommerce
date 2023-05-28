import { useEffect } from "react"
import { useCartContext } from "../../context/CartContext"

const Pending = () => {

  const { clearCart } = useCartContext()

  useEffect(() => {
    const fn = async () => await clearCart()
    fn()
  }, []) // eslint-disable-line

  return (
    <section>
      <h2>Su pago está pendiente.</h2>
    </section>
  )
}

export default Pending
