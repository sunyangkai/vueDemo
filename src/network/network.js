import axios from 'axios'

let HTTP = (method, url, data) => {
  return axios({
    method: method,
    url: url,
    data: data
  })
}

export {
  HTTP
}
