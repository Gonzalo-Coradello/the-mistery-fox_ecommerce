import axios from "axios";
import User from "./userService";
const userService = new User()
const url_base = `${process.env.REACT_APP_urlBase}/api/carts`
const getUser = userService.getCurrentUser

export default class Cart {
  getCartProducts = async () => {
    const user = await getUser()
    const response = await axios.get(`${url_base}/${user.payload.cart}`)
    return response.data.payload.products
  }
  
  addProduct = async (pid, quantity) => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity })
    return response.data.payload.products
  }
  
  replaceQuantity = async (pid, quantity) => {
    const user = await getUser()
    const response = await axios.put(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity })
    return response.data.payload.products
  }
  
  deleteProduct = async (pid) => {
    const user = await getUser()
    const response = await axios.delete(`${url_base}/${user.payload.cart}/products/${pid}`)
    return response.data
  }
  
  clearCart = async () => {
    const user = await getUser()
    const response = await axios.delete(`${url_base}/${user.payload.cart}`)
    return response.data
  }
  
  purchase = async () => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/purchase`)
    return response.data.payload
  }
  
  prepareCheckout = async () => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/prepareCheckout`)
    return response.data.payload
  }
  
  finishCheckout = async () => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/prepareCheckout`)
    return response.data.payload
  }
}