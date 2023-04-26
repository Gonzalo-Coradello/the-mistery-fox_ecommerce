import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const CartItem = ({ _id, title, author, price, thumbnails, quantity, stock }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="card card-side border flex rounded-md px-2 mx-2 lg:w-4/5 max-w-[850px] lg:mx-auto mb-4">
            <div className="rounded-md flex items-center py-2">
                <img src={thumbnails[0]} alt={title} className="rounded-md max-h-36 max-w-[8rem] sm:max-w-full"></img>
            </div>
            <div className="sm:card-body justify-center md:gap-4  ">
                <button onClick={() => removeItem(_id)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="md:flex md:justify-between items-center">
                    <div className="grid gap-0 py-2">
                        <h2 className="text-left card-title font-heading mx-auto text-base sm:text-lg lg:text-xl">{title}</h2>
                        <h4 className="text-left text-xs font-light text-primary/60 sm:text-base">{author}</h4>
                    </div>
                    <div className="flex justify-between lg:px-3 py-0 ">
                        <ItemCount stock={stock} price={price} initial={quantity} inCart={true} id={_id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem