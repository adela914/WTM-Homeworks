import test from 'ava'
import request from 'supertest'
import app from '../app'




test("Show restaurants list", async t => {

    t.plan(1)

    const res = await request(app).get("/restaurants")
    t.is(res.status, 200)

})

test("Show new restaurant adding form", async t => {

    t.plan(1)

    const res = await request(app).get("/restaurants/new")
    t.is(res.status, 200)

})

test("Create new restaurant", async t => {

    t.plan(1)
    const restaurantToCreate = {
        name: "Test1",
        location: "Test",
        comments: []
    }

    const res = await request(app)
        .post("/restaurants/new")
        .send(restaurantToCreate)

    t.is(res.status, 200)


})

test("Fetch a restaurant", async t => {
    t.plan(3)

    const restaurantToCreate = {
        name: "Test1",
        location: "Test",
        comments: []
    }
    const restaurantCreated =
        (await request(app)
            .post("/restaurants/new")
            .send(restaurantToCreate)).body

    const fetchRes = await request(app).get(`/restaurants/${restaurantCreated._id}`)
    t.is(fetchRes.status, 200)

    const fetchResJson = await request(app).get(`/restaurants/${restaurantCreated._id}/json`)

    t.is(fetchResJson.status, 200)


    const restaurantFetched = fetchResJson.body
    t.deepEqual(restaurantFetched, restaurantCreated)


})

test("Delete a restaurant", async t => {
    t.plan(4)

    const restaurantToCreate = {
        name: "Test1",
        location: "Test",
        comments: []
    }

    const restaurantCreated = (await request(app)
        .post("/restaurants/new")
        .send(restaurantToCreate)).body

    const deleteRes = await request(app).delete(`/restaurants/${restaurantCreated._id}`)
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    const fetch = await request(app).get(`/restaurants/${restaurantCreated._id}`)
    t.is(fetch.status, 404)

    const fetchJson = await request(app).get(`/restaurants/${restaurantCreated._id}/json`)
    t.is(fetchJson.status, 404)

})

test("Get list of restaurants", async t => {

    t.plan(3)
    const restaurantToCreate = {
        name: "Test1",
        location: "Test",
        comments: []
    }
    const restaurantCreated = await request(app)
        .post('/restaurants/new')
        .send(restaurantToCreate)

    const jsonRes = await request(app).get('/restaurants/json')

    t.is(jsonRes.status, 200)

    // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
        // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)


})