import { API_ENDPOINT } from './AppConstants'

const fetchUser = async () => await fetch(API_ENDPOINT.USER, { method: 'GET' }).then(res => res.json())

export default {
  fetchUser
}