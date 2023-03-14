import { Link } from "react-router-dom"

const Item = ({ id, title, author, img, price }) => {
    return (
        <div className="card border border-primary-color ">
            <figure>
                <div className="h-80"><img className="h-full" src={img} alt={title} /></div>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold mx-auto">{title}</h2>
                <h4 className="text-sm">{author}</h4>
                <h4 className="text-sm">${price}</h4>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/detail/${id}`} className="btn btn-outline normal-case">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item