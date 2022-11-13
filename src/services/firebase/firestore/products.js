import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore'
import { db } from ".."
import { productAdapter } from '../../../adapter/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
            const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return productAdapter(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        
        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productAdapted = { id: res.id, ...data }
                resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}