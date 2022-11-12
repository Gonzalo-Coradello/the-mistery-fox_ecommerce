import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ({ id, title, author, category, description, img, price, stock }) => {

    const { addItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {id, title, author, img, price, quantity, stock}
        addItem(productToAdd, quantity)
        setNotification('success', '¡Producto añadido al carrito!')
    }

    return (
        <div className="card lg:card-side gap-4 w-4/5 mx-auto mt-4">
            <div className="max-h-[500px] flex justify-center basis-1/2">
                <img className="object-cover h-full rounded-xl" src={img} alt={title} />
            </div>
            <div className="card-body basis-1/2">
                <h2 className="card-title mx-auto">{title}</h2>
                <h3>{author}</h3>
                <p>{description}</p>
                <div>
                    <ItemCount stock={stock} initial={1} price={price} onAdd={handleOnAdd} inCart={false} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail