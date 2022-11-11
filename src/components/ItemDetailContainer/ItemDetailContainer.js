import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById(5)
            .then(res => setProduct(res))
    }, [])

    return (
        <>
            <h2>Detalles del producto</h2>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer