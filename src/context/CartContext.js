import { useState, useEffect, createContext, useContext } from "react"
import { addProduct, deleteProduct, getCartProducts, clearCart as emptyCart, replaceQuantity } from "../services/axios/cartService"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getCartProducts()
            .then(data => setCart(data))
            .finally(setLoading(false))
    }, [])

    useEffect(() => {
        const totalQty = cart.reduce((acc, prod) => acc + prod.quantity, 0)
        const total = cart.reduce((acc, prod) => acc + prod.product.price * prod.quantity, 0)

        setTotalQuantity(totalQty)
        setTotal(total)
    }, [cart]) //eslint-disable-line

    const addItem = async (pid, quantity) => {
        const result = await addProduct(pid, quantity)
        setCart(result)
    }

    const removeItem = async (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.product._id !== id)
        setCart(cartWithoutProduct)
        await deleteProduct(id)
    }

    const clearCart = async () => {
        setCart([])
        await emptyCart()
    }

    const updateQuantityFromCart = async (id, quantity) => {
        const productToUpdate = cart.find(({product}) => product._id === id)
        const updatedProd = {
            ...productToUpdate,
            quantity: quantity
        }
        setCart(prevCart => prevCart.map(prod => prod.product._id === id ? updatedProd : prod))
        await replaceQuantity(id, quantity)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart, updateQuantityFromCart, loading }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}