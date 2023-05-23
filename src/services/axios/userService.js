import axios from "axios";
const url_base = `${process.env.REACT_APP_urlBase}/api/sessions`
axios.defaults.withCredentials = true

export const register = async (data) => {
    const response = await axios.post(`${url_base}/register`, data)
    return response.data
}

export const login = async (data) => {
    const response = await axios.post(`${url_base}/login`, data)
    return response.data
}

export const githubLogin = async () => {
    const response = await axios.get(`${url_base}/github`)
    console.log(response.data)
    return response.data
}

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${url_base}/current`)
        if(!response) return {status: "error", error: "Auth error"}
        return response?.data
    } catch(error) {
        return {status: "error", error}
    }
}