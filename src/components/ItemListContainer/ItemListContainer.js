import { useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import useAsync from "../../hooks/useAsync";

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    useEffect(() => {
        document.title = 'Listado de productos'
    }, [])


    if(loading) return <Loader />

    if(error) return (
        <div>
            <h2>Hubo un error</h2>
            <p>{error.toString()}</p>
        </div>
    )

    return (
        <section>
            <h1 className="text-3xl mb-4">Todos nuestros libros</h1>
            <ItemList products={products} />
        </section>

    )
}

export default ItemListContainer