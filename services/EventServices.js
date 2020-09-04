import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('http://localhost:3000/events')
  },
  getEventbyId(id) {
    return apiClient.get('http://localhost:3000/events/' + id)
  },
}
