const ItemDetail = ({ id, title, author, category, description, img, price, stock }) => {


    return (
        <div className="card lg:card-side gap-4 w-4/5 mx-auto mt-4">
            <div className="max-h-[500px] flex justify-center basis-1/2">
                <img className="object-cover h-full rounded-xl" src={img} />
            </div>
            <div className="card-body basis-1/2">
                <h2 className="card-title mx-auto">{title}</h2>
                <h3>{author}</h3>
                <p>{description}</p>
                <div>
                    <h4>Cantidad:</h4>
                    {/* counter */}
                </div>
                <h3>Total: ${price}</h3>
                <button className="btn btn-outline">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail