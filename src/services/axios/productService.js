import axios from 'axios'
import options from './axiosConfig'
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
    const search = searchParams.get('search')

    const options = {}
    category && (options.category = category)
    page && (options.page = page)
    limit && (options.limit = limit)
    sort && (options.sort = sort)
    sort_order && (options.sort_order = sort_order)
    stock && (options.stock = stock)
    search && (options.search = search)

    const queries = Object.entries(options)
      .map(subArr => subArr.join('='))
      .join('&')

    const response =
      queries === ''
        ? await axios.get(url_base, options)
        : await axios.get(`${url_base}?${queries}`, options)
    return response.data.payload
  }

  getOwnProducts = async (searchParams, owner) => {
    const category = searchParams.get('category')
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    const sort = searchParams.get('sort')
    const sort_order = searchParams.get('sort_order')
    const stock = searchParams.get('stock')
    const search = searchParams.get('search')

    const options = {}
    options.owner = owner
    category && (options.category = category)
    page && (options.page = page)
    limit && (options.limit = limit)
    sort && (options.sort = sort)
    sort_order && (options.sort_order = sort_order)
    stock && (options.stock = stock)
    search && (options.search = search)

    const queries = Object.entries(options)
      .map(subArr => subArr.join('='))
      .join('&')

    const response =
      queries === ''
        ? await axios.get(url_base, options)
        : await axios.get(`${url_base}?${queries}`, options)
    return response.data.payload
  }

  getOneProduct = async id => {
    const response = await axios.get(`${url_base}/${id}`, options)
    return response.data.payload
  }

  createProduct = async data => {
    const response = await axios.postForm(url_base, data, { headers: { 'content-type': 'multipart/form-data', withCredentials: true,
    'Access-Control-Allow-Origin': process.env.REACT_APP_urlBase,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
    return response.data.payload
  }

  updateProduct = async (id, data) => {
    const response = await axios.put(`${url_base}/${id}`, data, options)
    return response.data.payload
  }

  deleteProduct = async id => {
    const response = await axios.delete(`${url_base}/${id}`, options)
    return response.data.payload
  }
}
