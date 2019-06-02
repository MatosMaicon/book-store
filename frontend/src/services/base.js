import axios from 'axios'

const baseURL = 'http://127.0.0.1:3001/api/v1'

// Create an axios instance
const api = axios.create({
  baseURL
})

export default api