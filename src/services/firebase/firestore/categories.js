import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../'

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))
    
        getDocs(collectionRef).then(res => {
            const categoriesDb = res.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
    
                return { id, ...data }
            })
            resolve(categoriesDb)
        })
        .catch(err => {
            reject(err)
        })
    })
}