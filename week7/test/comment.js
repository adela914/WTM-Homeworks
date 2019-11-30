import test from 'ava'
import request from 'supertest'
import app from '../app'


const commentToCreate = {
    text: "It was good!"
}

const restaurantToCreate = {
    name: "Test1",
    location: "Test",
    comments: []
}



test("Get list of comments", async t => {

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

    const jsonComments = await request(app).get('/comments')

    t.is(jsonComments.status, 200)

    t.true(Array.isArray(jsonComments.body), 'Body should be an array')
    t.true(jsonComments.body.length > 0)


})





test("Create a new comment", async t => {
    t.plan(2)


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


test("Delete a new comment", async t => {
    t.plan(5)


    ///first creating a restaurant

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

    const commentJson = (await request(app)
        .post(`/restaurants/${restaurantCreated._id}`)
        .send(commentToCreate)).body

    const deleteRestaurant = await request(app)
        .delete(`/comments/${commentJson._id}`)

    t.is(deleteRestaurant.status, 200)
    t.is(deleteRestaurant.ok, true)

    const fetch = await request(app).get(`/comments/${commentJson._id}`)
    t.is(fetch.status, 404)




})