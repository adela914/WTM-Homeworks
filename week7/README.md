### start

```
nodemon index.js
```

```
http://localhost:3000
```

```
http://localhost:3000/restaurants
```

```
http://localhost:3000/users
```


###  AXIOS 

### Users create a restaurant

```
axios.post('http://localhost:3000/restaurants', { name:"", location:"" }).then(console.log)
```

### Users can register

```
axios.post('http://localhost:3000/users', { username:"", password:"" }).then(console.log)
```
