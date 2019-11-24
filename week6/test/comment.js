import test from 'ava'
import request from 'supertest'
import app from '../app'



test("Show all the comments", async t => {
    t.plan(1)

    const res = await request(app).get("/comments")
    t.is(res.status, 200)
})

///More tests for comment.js to be updated...