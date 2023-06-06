import axios from "axios";
import User from "./userService";
import options from "./axiosConfig";
const userService = new User()
const url_base = `${process.env.REACT_APP_urlBase}/api/carts`
const getUser = userService.getCurrentUser

export default class Cart {
  getCartProducts = async () => {
    const user = await getUser()
    const response = await axios.get(`${url_base}/${user.payload.cart}`, options)
    return response.data.payload.products
  }
  
  addProduct = async (pid, quantity) => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity }, options)
    return response.data.payload.products
  }
  
  replaceQuantity = async (pid, quantity) => {
    const user = await getUser()
    const response = await axios.put(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity }, options)
    return response.data.payload.products
  }
  
  deleteProduct = async (pid) => {
    const user = await getUser()
    const response = await axios.delete(`${url_base}/${user.payload.cart}/products/${pid}`, options)
    return response.data
  }
  
  clearCart = async () => {
    const user = await getUser()
    const response = await axios.delete(`${url_base}/${user.payload.cart}`, options)
    return response.data
  }
  
  purchase = async () => {
    const user = await getUser()
    const response = await axios.post(`${url_base}/${user.payload.cart}/checkout`, options)
    return response.data.payload
  }
}