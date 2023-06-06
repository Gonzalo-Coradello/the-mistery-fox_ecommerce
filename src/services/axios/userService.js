import axios from 'axios'
const url_base = `${process.env.REACT_APP_urlBase}/api/sessions`
const url_base_users = `${process.env.REACT_APP_urlBase}/api/users`
axios.defaults.withCredentials = true

const options = {
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
    'Access-Control-Allow-Origin': process.env.REACT_APP_urlBase,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

axios.defaults.headers.common = options.headers
axios.defaults.headers.post = options.headers

export default class User {
  register = async data => {
    const response = await axios.post(`${url_base}/register`, data, options)
    return response.data
  }

  login = async data => {
    const response = await axios.post(`${url_base}/login`, data, options)
    return response.data
  }

  getCurrentUser = async () => {
    try {
      const response = await axios.get(`${url_base}/current`, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      console.error(error)
      return { status: 'error', error: error.message }
    }
  }

  logout = async () => {
    try {
      const response = await axios.post(`${url_base}/logout`, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  getAllUsers = async () => {
    try {
      const response = await axios.get(`${url_base_users}`, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data.payload
    } catch (error) {
      return { status: 'error', error }
    }
  }

  deleteInactiveUsers = async () => {
    try {
      const response = await axios.delete(`${url_base_users}`, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  updateRole = async id => {
    try {
      const response = await axios.put(`${url_base_users}/premium/${id}`, {}, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  updateUser = async (email, data) => {
    try {
      const response = await axios.put(`${url_base_users}/${email}`, data, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  deleteUser = async email => {
    try {
      const response = await axios.delete(`${url_base_users}/email/${email}`, options)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  uploadDocuments = async (id, data) => {
    try {
      const response = await axios.postForm(
        `${url_base_users}/${id}/documents`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  sendPasswordEmail = async email => {
    try {
      const response = await axios.post(`${url_base}/password_reset`, { email }, options)
      console.log(response)
      if (!response) return { status: 'error', error: 'Error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  changePassword = async (id, token, newPassword, confirmation) => {
    try {
      const response = await axios.put(
        `${url_base}/password_reset/${id}/${token}`,
        { newPassword, confirmation }, options
      )
      if (!response) return { status: 'error', error: 'Error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }
}
