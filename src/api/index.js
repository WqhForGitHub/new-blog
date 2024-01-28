import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
)

instance.interceptors.response.use(
  (config) => {
    return config
  }
)

export function get(url, params) {
  return new Promise((resolve) => {
    instance
      .get(url, {
        params
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function () {
      })
  })
}

export function post(url, data) {
  return new Promise((resolve) => {
    instance
      .post(url, data)
      .then(function (response) {
        resolve(response)
      })
      .catch(function () {
      })
  })
}
