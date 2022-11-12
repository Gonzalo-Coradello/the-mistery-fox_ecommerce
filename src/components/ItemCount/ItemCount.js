import { useState } from "react";

const ItemCount = ({ stock, initial = 1, price, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) setQuantity(prev => prev + 1)
    }

    const decrement = () => {
        if(quantity > 1) setQuantity(prev => prev - 1)
    }

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold">Total: ${price * quantity}</h3>
                <div className="flex gap-4">
                    <button onClick={decrement} className="btn-ghost rounded-lg px-5 text-xl font-semibold">-</button>
                    <h4 className="cursor-default text-xl font-normal">{quantity}</h4>
                    <button onClick={increment} className="btn-ghost rounded-lg px-5 text-xl font-semibold">+</button>
                </div>
            </div>
            <div className="mx-auto mt-4">
                <button onClick={() => onAdd(quantity)} className="btn btn-outline">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount