import { instance } from './api'

const getPeople = async () => {
  try {
    const res = await instance.get('/people/')
    return res.data.results
  } catch (error) {
    return error
  }
}

export default {
  getPeople
}