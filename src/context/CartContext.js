import { useState, useEffect, createContext, useContext } from 'react'
import CartService from '../services/axios/cartService'
import { useSessionContext } from './UserContext'

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [preferenceId, setPreferenceId] = useState()
  const [ticket, setTicket] = useState()
  const [outOfStock, setOutOfStock] = useState()
  const { isLogged, user } = useSessionContext()

  useEffect(() => {
    if(isLogged && user.role !== 'admin') {
      console.log('Is logged? ', isLogged)
      setLoading(true)
      CartService.getCartProducts()
        .then(data => setCart(data))
        .catch(error => console.log(error))
        .finally(setLoading(false))
    }
  }, [isLogged, user])

  useEffect(() => {
    const totalQty = cart.reduce((acc, prod) => acc + prod.quantity, 0)
    const total = cart.reduce(
      (acc, prod) => acc + prod.product.price * prod.quantity,
      0
    )

    setTotalQuantity(totalQty)
    setTotal(total)
  }, [cart]) //eslint-disable-line

  const addItem = async (pid, quantity) => {
    setLoading(true)
    await CartService.addProduct(pid, quantity)
    const result = await CartService.getCartProducts()
    setCart(result)
    setLoading(false)
  }

  const removeItem = async id => {
    const cartWithoutProduct = cart.filter(prod => prod.product._id !== id)
    setCart(cartWithoutProduct)
    await CartService.deleteProduct(id)
  }

  const clearCart = async () => {
    setCart([])
    await CartService.emptyCart()
  }

  const updateQuantityFromCart = async (id, quantity) => {
    const productToUpdate = cart.find(({ product }) => product._id === id)
    const updatedProd = {
      ...productToUpdate,
      quantity: quantity,
    }
    setCart(prevCart =>
      prevCart.map(prod => (prod.product._id === id ? updatedProd : prod))
    )
    await CartService.replaceQuantity(id, quantity)
  }

  const prepareCheckout = async () => {
    const { outOfStock, ticket, preferenceId } = await CartService.prepareCheckout()
    setPreferenceId(preferenceId)
    setTicket(ticket)
    setOutOfStock(outOfStock)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        totalQuantity,
        total,
        clearCart,
        updateQuantityFromCart,
        loading,
        prepareCheckout,
        preferenceId,
        ticket,
        outOfStock,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
