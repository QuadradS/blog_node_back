import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser'
import config from './config'
import startServer from './server'

const app = express()

startServer(app)

app.use(morgan('tiny'))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(express.static(`${__dirname}/public`))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))

