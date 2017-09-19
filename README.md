### Vue-cache

#### A library made to sync the routes with Vue store and fetch the data from any rest api.

#### It caches the data and it uses the data through out the app runtime.

### Install

#### npm install vuex vue-cache --save

### Usage:

import cache from 'vue-cache'

Vue.use(cache, {http: Vue.http, appkey: 'enter your key'}

### Usage through out the app:

#### Fetching data from api:
this.$data.fetchList('path to the api', 'what do you want to name that list').then(val => {})

#### Fetching sub routes for routes from api:

this.$data.fetchDetail('path to the api', 'parent list', ['route1','route2']).then(val => {})

##### You can fetch n routes.

#### Fetching a single entry:

this.$data.fetchItem('path to that entry', id, 'name of the list').then(val => {})

#### Create and sync data:
this.$data.addData('path to that entry', 'name of the list', data).then(() => {})
