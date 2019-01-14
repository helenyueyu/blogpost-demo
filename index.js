const { MongoClient } = require('mongodb')
const express = require('express')
const next = require('next')
const co = require('co')
const body = require('body-parser')

const api = require('./lib/api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const MONGO_URL = 'mongodb://localhost:27017/test'
const PORT = 3000

co(function*() {
  yield app.prepare()

  console.log(`Connecting to ${MONGO_URL}`)
  const db = yield MongoClient.connect(MONGO_URL)

  const server = express()

  server.use(body.json())
  server.use((req, res, next) => {
    req.db = db
    next()
  })
  server.use('/api', api(db))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT)
  console.log(`Listening on ${PORT}`)
}).catch(error => console.log(error.stack))
