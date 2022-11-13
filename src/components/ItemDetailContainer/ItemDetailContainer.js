import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from "../Loader/Loader"
import { getProduct } from "../../services/firebase/firestore/products"
import useAsync from "../../hooks/useAsync"

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const navigate = useNavigate()

    const getProductById = () => getProduct(productId)
    const { data: product, error, loading } = useAsync(getProductById, [productId])

    useEffect(() => {
        document.title = loading ? 'Cargando' : `${product.title}, de ${product.author}`
    }, [product]) // eslint-disable-line 

    if(loading) return <Loader />

    if(error) return (
        <div>
            <h2>Hubo un error</h2>
            <p>{error.toString()}</p>
        </div>
    )

    return (
        <>
            <h2>Detalles del producto</h2>
            <button className='btn btn-ghost' onClick={() => navigate(-1)}>Volver</button>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer