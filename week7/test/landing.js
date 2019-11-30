import test from 'ava'
import request from 'supertest'
import app from '../app'



test("Show register form", async t => {

    t.plan(1)

    const res = await request(app).get("/register")
    t.is(res.status, 200)

})

test("Show index page", async t => {

    t.plan(1)

    const res = await request(app).get("/")
    t.is(res.status, 200)

})



test("Show login page", async t => {

    t.plan(1)

    const res = await request(app).get("/login")
    t.is(res.status, 200)

})