import test from 'ava'
import request from 'supertest'
import app from '../app'



test("Show all the comments", async t => {
    t.plan(1)

    const res = await request(app).get("/comments")
    t.is(res.status, 200)
})


test("Create a new comment", async t => {
    t.plan(1)

    const commentToCreate = {
        text: "It was good!"
    }

    const restaurantToCreate = {
            name: "Test1",
            location: "Test",
            comments: []
        }
        ///first creating a restaurant to leave a comment
    const restaurantRes = await request(app)
        .post("/restaurants/new")
        .send(restaurantToCreate)

    t.is(restaurantRes.status, 200)

    const restaurantCreated = (await request(app)
        .post("/restaurants/new")
        .send(restaurantToCreate)).body

    const commentRes = await request(app)
        .post(`/restaurants/${restaurantCreated._id}`)
        .send(commentToCreate)

    t.is(commentRes.status, 200)



})


// test("Delete a comment", async t => {
//     t.plan(4)

//     const commentToCreate = {
//         text: 
//     }

//     const restaurantCreated = (await request(app)
//         .post("/restaurants/new")
//         .send(restaurantToCreate)).body

//     const deleteRes = await request(app).delete(`/restaurants/${restaurantCreated._id}`)
//     t.is(deleteRes.status, 200)
//     t.is(deleteRes.ok, true)

//     const fetch = await request(app).get(`/restaurants/${restaurantCreated._id}`)
//     t.is(fetch.status, 404)

//     const fetchJson = await request(app).get(`/restaurants/${restaurantCreated._id}/json`)
//     t.is(fetchJson.status, 404)

// })
///More tests for comment.js to be updated...