import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import { getProductsWithQueries } from "../../services/axios/productService";
import Categories from "../Categories/Categories";

const ItemListContainer = () => {

    const [ searchParams ] = useSearchParams()
    const location = useLocation()
    const queries = location.search
    const page = searchParams.get('page')
    const category = searchParams.get('category')

    const getProducts = () => getProductsWithQueries(searchParams)
    const { data: products, error, loading, prevPage, nextPage } = useAsync(getProducts, [searchParams])

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
            <div>
                { prevPage[0] && <Link to={ queries.replace(`page=${page}`, `page=${prevPage[1]}`) }>Anterior</Link> }
                { nextPage[0] && <Link to={ page ? queries.replace(`page=${page}`, `page=${nextPage[1]}`) : category ? `${queries.concat(`&page=${nextPage[1]}`)}` : `${queries.concat(`?page=${nextPage[1]}`)}` }>Siguiente</Link> }
            </div>
        </section>

    )
}

export default ItemListContainer