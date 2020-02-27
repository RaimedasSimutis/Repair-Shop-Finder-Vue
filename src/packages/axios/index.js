import axios from 'axios'
// import cookie from '@/packages/vue-cookie'

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

export default http
