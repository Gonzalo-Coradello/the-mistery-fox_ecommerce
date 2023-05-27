import axios from 'axios'
const url_base = `${process.env.REACT_APP_urlBase}/api/sessions`
axios.defaults.withCredentials = true

export default class UserService {
  register = async data => {
    const response = await axios.post(`${url_base}/register`, data)
    return response.data
  }

  login = async data => {
    const response = await axios.post(`${url_base}/login`, data)
    return response.data
  }

  githubLogin = async () => {
    const response = await axios.get(`${url_base}/github`)
    console.log(response.data)
    return response.data
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
}
