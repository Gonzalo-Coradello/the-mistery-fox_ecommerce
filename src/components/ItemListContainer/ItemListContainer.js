import { useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import useAsync from "../../hooks/useAsync";
import Categories from "../Categories/Categories";

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
        <section className="bg-base-100">
            <Categories />
            <h1 className="text-3xl mb-8 mt-8">Todos nuestros libros</h1>
            <ItemList products={products} />
        </section>

    )
}

export default ItemListContainer