import axios from 'axios'
const url_base = `${process.env.REACT_APP_urlBase}/api/sessions`
const url_base_users = `${process.env.REACT_APP_urlBase}/api/users`
axios.defaults.withCredentials = true

export default class User {
  register = async data => {
    const response = await axios.post(`${url_base}/register`, data)
    return response.data
  }

  login = async data => {
    const response = await axios.post(`${url_base}/login`, data)
    return response.data
  }

  githubLogin = async () => {
    // const response = await axios.get(`${url_base}/github`)
    window.open(`${url_base}/github`, '_self')
    // return response.data
  }

  getCurrentUser = async () => {
    try {
      const response = await axios.get(`${url_base}/current`)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  logout = async () => {
    try {
      const response = await axios.post(`${url_base}/logout`)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  getAllUsers = async () => {
    try {
      const response = await axios.get(`${url_base_users}`)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data.payload
    } catch (error) {
      return { status: 'error', error }
    }
  }

  deleteInactiveUsers = async () => {
    try {
      const response = await axios.delete(`${url_base_users}`)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  updateRole = async id => {
    try {
      const response = await axios.put(`${url_base_users}/premium/${id}`)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  updateUser = async (email, data) => {
    try {
      const response = await axios.put(`${url_base_users}/${email}`, data)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }
  
  deleteUser = async email => {
    try {
      const response = await axios.delete(`${url_base_users}/email/${email}`)
      console.log(response.data)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }

  uploadDocuments = async (id, data) => {
    try {
      const response = await axios.post(`${url_base_users}/${id}/documents`, data)
      if (!response) return { status: 'error', error: 'Auth error' }
      return response?.data
    } catch (error) {
      return { status: 'error', error }
    }
  }
}
