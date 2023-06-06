import axios from 'axios'

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

export default options