import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const CartItem = ({ id, title, author, price, img, quantity, stock }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="card card-side border border-primary-color mx-auto flex rounded-md px-2 w-11/12 lg:w-4/5 max-w-[850px] mb-6">
            <div className="basis-3/12 rounded-md flex items-center py-2">
                <img src={img} alt={title} className="rounded-md"></img>
            </div>
            <div className="card-body basis-9/12 gap-4 mx-auto max-w-[550px]">
                <button onClick={() => removeItem(id)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h2 className="card-title mx-auto">{title}</h2>
                <h4>{author}</h4>
                <div className="flex justify-between lg:px-3 mt-2 lg: mt-6">
                    <ItemCount stock={stock} price={price} initial={quantity} inCart={true} id={id} />
                </div>
            </div>
        </div>
    )
}

export default CartItem