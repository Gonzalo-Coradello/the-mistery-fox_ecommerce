import axios from "axios";
import { getCurrentUser } from "./userService";
const url_base = `${process.env.REACT_APP_urlBase}/api/carts`

export const getCartProducts = async () => {
  const user = await getCurrentUser()
  const response = await axios.get(`${url_base}/${user.payload.cart}`)
  return response.data.payload.products
}

export const addProduct = async (pid, quantity) => {
  const user = await getCurrentUser()
  const response = await axios.post(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity })
  return response.data.payload.products
}

export const replaceQuantity = async (pid, quantity) => {
  const user = await getCurrentUser()
  const response = await axios.put(`${url_base}/${user.payload.cart}/products/${pid}`, { quantity })
  return response.data.payload.products
}

export const deleteProduct = async (pid) => {
  const user = await getCurrentUser()
  const response = await axios.delete(`${url_base}/${user.payload.cart}/products/${pid}`)
  return response.data
}

export const clearCart = async () => {
  const user = await getCurrentUser()
  const response = await axios.delete(`${url_base}/${user.payload.cart}`)
  return response.data
}

export const purchase = async () => {
  const user = await getCurrentUser()
  const response = await axios.post(`${url_base}/${user.payload.cart}/purchase`)
  return response.data.payload
}