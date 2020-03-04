import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.co/api/',
  responseType: 'json'
})

const courseInstance = axios.create({
  baseURL: 'https://api.privatbank.ua/p24api/',
  responseType: 'json'
})

export {courseInstance, instance}
