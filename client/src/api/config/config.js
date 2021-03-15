import axios from 'axios'
import { configure } from 'axios-hooks'

// TODO: Get this values from env vars
const APIClient = axios.create({
  baseURL: 'http://localhost:3001/'
})

configure({axios: APIClient})