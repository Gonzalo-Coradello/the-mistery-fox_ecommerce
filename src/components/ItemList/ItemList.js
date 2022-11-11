import Item from '../Item/Item'


const ItemList = ({ products }) => {
    return(
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 w-4/5 max-w-[800px] mx-auto'>
            { products.map(prod => <Item key={prod.id} {...prod} />) }
        </div>
    )
}

export default ItemList