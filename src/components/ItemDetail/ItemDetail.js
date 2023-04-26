import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ({ _id, title, author, category, description, thumbnails, price, stock }) => {

    const { addItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {_id, title, author, thumbnails, price, quantity, stock}
        addItem(productToAdd, quantity)
        setNotification('success', '¡Producto añadido al carrito!')
    }

    return (
        <div className="card lg:card-side gap-4 w-4/5 mx-auto mt-4">
            <div className="max-h-[500px] flex justify-center basis-1/2">
                <img className="object-cover h-full rounded-xl mt-6" src={thumbnails[0]} alt={title} />
            </div>
            <div className="card-body px-0 basis-1/2 lg:px-6">
                <h2 className="card-title mx-auto text-xl font-heading">{title}</h2>
                <h3 className="text-base font-light">{author}</h3>
                <p className="mt-4 text-justify font-light">{description}</p>
                <div className="mt-4">
                    <ItemCount stock={stock} initial={1} price={price} onAdd={handleOnAdd} inCart={false} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail