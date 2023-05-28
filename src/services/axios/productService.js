import axios from 'axios'
const url_base = `${process.env.REACT_APP_urlBase}/api/products`

export default class Product {
  getProducts = async () => {
    const response = await axios.get(url_base)
    return response.data.payload
  }

  getProductsWithQueries = async searchParams => {
    const category = searchParams.get('category')
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    const sort = searchParams.get('sort')
    const sort_order = searchParams.get('sort_order')
    const stock = searchParams.get('stock')

    const options = {}
    category && (options.category = category)
    page && (options.page = page)
    limit && (options.limit = limit)
    sort && (options.sort = sort)
    sort_order && (options.sort_order = sort_order)
    stock && (options.stock = stock)

    const queries = Object.entries(options)
      .map(subArr => subArr.join('='))
      .join('&')

    const response =
      queries === ''
        ? await axios.get(url_base)
        : await axios.get(`${url_base}?${queries}`)
    return response.data.payload
  }

  getOneProduct = async id => {
    const response = await axios.get(`${url_base}/${id}`)
    return response.data.payload
  }

  createProduct = async data => {
    const response = await axios.post(url_base, data)
    return response.data.payload
  }

  updateProduct = async (id, data) => {
    const response = await axios.put(`${url_base}/${id}`, data)
    return response.data.payload
  }

  deleteProduct = async id => {
    const response = await axios.delete(`${url_base}/${id}`)
    return response.data.payload
  }
}
