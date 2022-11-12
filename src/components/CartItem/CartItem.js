const CartItem = ({ id, title, price, img, quantity }) => {

    return (
        <div>
            <h2>{title}</h2>
            <h2>{id}</h2>
            <h2>{quantity}</h2>
            <h2>{price}</h2>
        </div>
    )
}

export default CartItem