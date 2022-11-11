import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, [])

    return (
        <section>
            <h1 className="text-3xl mb-4">Todos nuestros libros</h1>
            <ItemList products={products} />
        </section>

    )
}

export default ItemListContainer