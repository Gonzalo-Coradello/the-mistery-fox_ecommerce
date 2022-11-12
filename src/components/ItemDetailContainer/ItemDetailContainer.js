import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState()
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = loading ? 'Cargando' : `${product.title}, de ${product.author}`
    }, [product]) // eslint-disable-line 

    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then(res => setProduct(res))
            .finally(setLoading(false))
    }, [productId])

    if(loading) return <Loader />

    return (
        <>
            <h2>Detalles del producto</h2>
            <button className='btn btn-ghost' onClick={() => navigate(-1)}>Volver</button>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer