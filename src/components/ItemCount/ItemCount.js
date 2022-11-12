import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial = 1, price, onAdd, inCart, id}) => {

    const [quantity, setQuantity] = useState(initial)
    const [currentStock, setCurrentStock] = useState()
    const { updateQuantityFromCart } = useContext(CartContext)

    useEffect(() => {
        if(inCart) updateQuantityFromCart(id, quantity)
    }, [quantity]) // eslint-disable-line 

    useEffect(() => {
        setCurrentStock(stock)
    }, [stock])

    const increment = () => {
        if(quantity < stock) setQuantity(prev => prev + 1)
    }

    const decrement = () => {
        if(quantity > 1) setQuantity(prev => prev - 1)
    }

    const validateStock = () => {
        if(currentStock > 0 && currentStock - quantity >= 0) {
            setCurrentStock(currentStock - quantity)
            onAdd(quantity)
        }
    }

    return (
        <div className="w-full">
            <div className="grid justify-center gap-4 lg:flex lg:justify-between">
                <h3 className="text-lg font-semibold">Total: ${price * quantity}</h3>
                <div className="flex gap-4 justify-center">
                    <button onClick={decrement} className="btn btn-sm btn-ghost px-5 text-xl font-semibold">-</button>
                    <h4 className="cursor-default text-xl font-normal">{quantity}</h4>
                    <button onClick={increment} className="btn btn-sm btn-ghost px-5 text-xl font-semibold">+</button>
                </div>
            </div>
            { !inCart && <div className="mx-auto mt-4">
                <button onClick={() => validateStock(quantity)} className="btn btn-outline mt-3">Agregar al carrito</button>
            </div> }
        </div>
    )
}

export default ItemCount