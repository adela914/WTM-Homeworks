// import test from 'ava'
// import request from 'supertest'
// import app from '../app'




// test("Create new user", async t => {
//     t.plan(3)
//     const userToCreate = { username: "Koen", location: "Mitte" };

//     const res = await request(app)
//         .post("/users")
//         .send(userToCreate)

//     t.is(res.status, 200)
//     t.is(res.body.username, userToCreate.username);
//     t.is(res.body.location, userToCreate.location);
// });

// test("Show the list of users", async t => {
//     t.plan(3)
//     const userToCreate = { username: "Koen", location: "Mitte" }

//     const userCreated = await request(app)
//         .post("/users")
//         .send(userToCreate)

//     const jsonRes = await request(app).get('/users')
//     t.is(jsonRes.status, 200)

//     // check the response whether it is an array
//     t.true(Array.isArray(jsonRes.body), 'Body should be an array')
//         // check the response whether at least there is 1 element
//     t.true(jsonRes.body.length > 0)


// })

// test("Fetch a user", async t => {
//     t.plan(2)
//     const userToCreate = {
//         username: "Yana",
//         location: "Test",
//         savedRestaurants: []
//     }

//     const yanaUserCreated = (await request(app)
//         .post("/users")
//         .send(userToCreate)).body

//     const fetchRes = await request(app).get(`/users/${yanaUserCreated._id}`)
//     t.is(fetchRes.status, 200)


//     const yanaUserFetched = fetchRes.body
//     t.deepEqual(yanaUserFetched, yanaUserCreated)

// })

// test("Delete a user", async t => {
//     t.plan(4)
//     const userToCreate = {
//         username: "Koen",
//         location: "P-berg",
//         savedRestaurants: []
//     }

//     const koenUserCreated = (await request(app)
//         .post("/users")
//         .send(userToCreate)).body

//     const deleteRes = await request(app).delete(`/users/${koenUserCreated._id}`)

//     t.is(deleteRes.status, 200)
//     t.is(deleteRes.ok, true)

//     const fetch = await request(app).get(`/users/${koenUserCreated._id}`)
//     t.is(fetch.status, 404)

//     const fetchJson = await request(app).get(`/users/${koenUserCreated._id}/json`)
//     t.is(fetchJson.status, 404)


// })