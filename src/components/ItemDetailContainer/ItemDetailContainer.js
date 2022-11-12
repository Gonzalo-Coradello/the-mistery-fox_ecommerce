import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


    const { productId } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById(productId)
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