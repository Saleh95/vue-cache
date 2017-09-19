var CachedData = (key) => {
  this.key = key
}

CachedData.prototype = {
  get: () => { return Promise.resolve(JSON.parse(localStorage.getItem(this.key) || '[]')) },
  set: (data) => { localStorage.setItem(this.key, JSON.stringify(data)) }
}

export default CachedData
