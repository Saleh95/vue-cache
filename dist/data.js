var Data = (http) => {
  this.http = http
}

Data.prototype = {
  constructor: Data,
  fetch: (path) => {
    return new Promise((resolve, reject) => {
      this.http.get(`/${path}`)
      .then(res => {
        resolve(res['body'] || res['data'])
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  fetchById: (path, id) => {
    return fetch(`/${path}/${id}`)
  },
  create (path, data) {
    return new Promise((resolve, reject) => {
      this.http.post(`/${path}`, data)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  update (path, id, data) {
    return new Promise((resolve, reject) => {
      this.http.put(`/${path}/${id}`, data)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  delete (path, id) {
    return new Promise((resolve, reject) => {
      this.http.delete(`/${path}/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}

export default Data
