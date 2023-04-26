import axios from "axios"

const url_base = `${process.env.REACT_APP_urlBase}/api/products`

export const getProducts = async () => {
    const response = await axios.get(url_base)
    return response.data.payload
}

export const getProductsWithQueries = async (searchParams) => {

    const category = searchParams.get('category')
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    const sortQuery = searchParams.get('sortQuery')
    const sortOrder = searchParams.get('sortOrder')
    const stock = searchParams.get('stock')

    const options = {}
    category && (options.category = category)
    page && (options.page = page)
    limit && (options.limit = limit)
    sortQuery && (options.sortQuery = sortQuery)
    sortOrder && (options.sortOrder = sortOrder)
    stock && (options.stock = stock)

    const queries = Object.entries(options).map(subArr => subArr.join('=')).join('&')

    const response = await axios.get(`${url_base}?${queries}`)
    return response.data.payload
}


export const getOneProduct = async id => {
    const response = await axios.get(`${url_base}/${id}`)
    return response.data.payload
}

export const createProduct = async data => {
    const response = await axios.post(url_base, data)
    return response.data.payload
}

export const updateProduct = async (id, data) => {
    const response = await axios.put(`${url_base}/${id}`, data)
    return response.data.payload
}

export const deleteProduct = async id => {
    const response = await axios.delete(`${url_base}/${id}`)
    return response.data.payload
}