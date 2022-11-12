export const productAdapter = (doc) => {

    const data = doc.data()

    const adaptedProduct = {
        id: doc.id,
        title: data.title,
        author: data.author,
        img: data.img,
        quantity: data.quantity,
        stock: data.stock,
        description: data.description,
        price: data.price,
        order: data.order
    }

    return adaptedProduct
}