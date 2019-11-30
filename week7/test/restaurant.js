import test from 'ava'
import request from 'supertest'
import app from '../app'

const restaurantToCreate = {
    name: "Test1",
    location: "Test",
    comments: []
}

test("Create new restaurant", async t => {

    t.plan(4)


    const restaurantCreate = await request(app)
        .post("/restaurants/new")
        .send(restaurantToCreate)

    t.is(restaurantCreate.status, 200)
    t.is(restaurantCreate.body.name, restaurantToCreate.name)
    t.is(restaurantCreate.body.location, restaurantToCreate.location)
    t.is(restaurantCreate.body.index, restaurantToCreate.index)

})



test("Delete a restaurant", async t => {
    t.plan(4)



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

test("Fetch a restaurant", async t => {
    t.plan(2);

    try {
        const restaurantCreated = (await request(app)
            .post("/restaurants/new")
            .send(restaurantToCreate)).body

        const fetchRes = await request(app).get(
            `/restaurants/${restaurantCreated._id}`
        )
        t.is(fetchRes.status, 200);

        const restaurantFetched = fetchRes.body
        t.deepEqual(restaurantFetched, restaurantCreated);
    } catch (err) {
        console.error(err.message)
        res.status(500).send(`Server error: ${err.message}`)
    }
})

test("Get list of restaurants", async t => {

    t.plan(3)

    const restaurantCreated = await request(app)
        .post('/restaurants/new')
        .send(restaurantToCreate)

    const jsonRes = await request(app).get('/restaurants')

    t.is(jsonRes.status, 200)

    // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
        // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)


})

test('update restaurant info', async t => {

    t.plan(2)
    const restaurantCreated = (await request(app)
        .post('/restaurants/new')
        .send(restaurantToCreate)).body

    const update = { name: 'Updated' }

    const restaurantToUpdate = await request(app)
        .put(`/restaurants/update/${restaurantCreated._id}`)
        .send(update)

    t.is(restaurantToUpdate.status, 200)

    const restaurantResultJSON = await request(app).get(`/restaurants/${restaurantCreated._id}/`)
    t.deepEqual(restaurantResultJSON.body.name, update.name)
})