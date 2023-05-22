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
        if(quantity < currentStock) {
            setQuantity(prev => prev + 1)
            if(inCart) updateQuantityFromCart(id, quantity + 1)
        }
    }

    const decrement = async () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1)
            if(inCart) updateQuantityFromCart(id, quantity - 1)
        }
    }

    const validateStock = () => {
        if(currentStock > 0 && currentStock - quantity >= 0) {
            setCurrentStock(currentStock - quantity)
            onAdd(quantity)
        }
    }

    return (
        <div className="w-full">
            <div className="grid justify-center gap-2 lg:justify-between">
                <div className="flex gap-4 justify-center items-center">
                    <button onClick={decrement} className="btn btn-sm btn-ghost btn-square text-sm font-medium">-</button>
                    <h4 className="cursor-default font-medium">{quantity}</h4>
                    <button onClick={increment} className="btn btn-sm btn-ghost btn-square text-sm font-medium">+</button>
                </div>
                <h3 className="text-sm md:text-base font-medium w-max mx-auto">Total: ${price * quantity}</h3>
            </div>
            { !inCart && <div className="mx-auto mt-4">
                <button onClick={() => validateStock(quantity)} className="btn btn-outline mt-3 normal-case">Agregar al carrito</button>
            </div> }
        </div>
    )
}

export default ItemCount