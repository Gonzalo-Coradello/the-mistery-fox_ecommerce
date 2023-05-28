import { useCartContext } from "../../context/CartContext"
import GhostButton from "../Buttons/GhostButton"
import ItemCount from "../ItemCount/ItemCount"

const CartItem = ({ quantity, product: { _id, title, author, price, thumbnails, stock } }) => {

  const { removeItem } = useCartContext()
  const image = `${process.env.REACT_APP_urlBase}${thumbnails[0]}`

  return (
    <div className="card card-side border flex rounded-md px-2 mx-2 lg:w-4/5 max-w-[850px] lg:mx-auto mb-4">
      <div className="rounded-md flex items-center py-2">
        <img src={image} alt={title} className="rounded-md max-h-36 max-w-[8rem] sm:max-w-full"></img>
      </div>
      <div className="card-body justify-center md:gap-4  ">
        <GhostButton handleClick={() => removeItem(_id)} rounded={true} classes="absolute right-2 top-2">✕</GhostButton>
        <div className="md:flex md:justify-between items-center">
          <div className="grid gap-0 py-2">
            <h2 className=" card-title font-heading mx-auto text-base sm:text-lg lg:text-xl">{title}</h2>
            <h4 className=" text-xs font-light text-primary/60 sm:text-base">{author}</h4>
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