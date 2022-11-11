const Item = ({ id, title, author, category, description, img, price, stock }) => {
    return (
        <div className="p-4 border border-primary-color grid gap-2">
            <img src={img} />
            <h2 className="text-xl font-bold">{title}</h2>
            <h4 className="text-sm">{author}</h4>
            <h4 className="text-sm">${price}</h4>
        </div>
    )
}

export default Item