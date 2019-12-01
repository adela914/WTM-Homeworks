## Mogo 🍱
Mogo means "Eat!" in Korean. In this application people can share authentic Korean restaurants in Berlin.

### Main Features
<li>Share restaurants</li>
<li>Leave comments about restaurants</li>
<li>Delete / Edit restaurant's information</li>

### Testing
Testing was done by using AVA.
100% Coverage.

### To start server

```
$ cd week7
$ npm i
$ npm cors
$ nodemon index.js

```
Make sure MongoDB is running.

```
$ mongod
$ mongo
```

http://localhost:3000

### Frontend
```

$ cd frontend
$ npm install -D pug pug-plain-loader
$ vue add vuetify
$ npm i axios
$ npm run serve

```
http://localhost:8080/


###  AXIOS 

#### Restaurant

Get list of restaurants
```
axios.get('http://localhost:3000/restaurants').then(console.log)
```
Get a specific restaurant
```
axios.get('http://localhost:3000/restaurants/:id').then(console.log)
```
Create a new restaurant
```
axios.post('http://localhost:3000/restaurants/new', {name: 'test', location: 'location'}).then(console.log)
```
Update a restaurant
```
axios.put('http://localhost:3000/restaurants/update/:id', {name: 'test updated', location: 'location updated'}).then(console.log)
```
Delete a reestaurant
```
axios.delete('http://localhost:3000/restaurants/:id').then(console.log)
```

#### Comment

Get list of comments
```
axios.get('http://localhost:3000/comments').then(console.log)
```
Create a comment on a restaurant

```
axios.post('http://localhost:3000/restaurants/:id', {text: 'test', author: 'location'}).then(console.log)
```

Delete a comment 
```
axios.delete('http://localhost:3000/comments/:id').then(console.log)
```
