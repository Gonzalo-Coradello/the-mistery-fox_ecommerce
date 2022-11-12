import { Link } from "react-router-dom"

const Item = ({ id, title, author, category, description, img, price, stock }) => {
    return (
        <div className="card border border-primary-color">
            <figure>
                <img src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <h4 className="text-sm">{author}</h4>
                <h4 className="text-sm">${price}</h4>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/detail/${id}`} className="btn">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item