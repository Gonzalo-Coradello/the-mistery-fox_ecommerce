import Item from '../Item/Item'


const ItemList = ({ products }) => {
    return(
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-10 w-5/6 max-w-[1200px] mx-auto'>
            { products.map(prod => <Item key={prod._id} {...prod} />) }
        </div>
    )
}

export default ItemList