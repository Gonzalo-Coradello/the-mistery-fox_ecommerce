import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import Loader from "../Loader/Loader";
// import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    // const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Listado de productos'
    }, [])

    useEffect(() => {
        setLoading(true)

        getProducts().then(res => setProducts(res))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) return <Loader />

    return (
        <section>
            <h1 className="text-3xl mb-4">Todos nuestros libros</h1>
            <ItemList products={products} />
        </section>

    )
}

export default ItemListContainer