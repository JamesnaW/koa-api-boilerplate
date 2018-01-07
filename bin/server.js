import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import passport from 'koa-passport'
import mount from 'koa-mount'
import serve from 'koa-static'
import mysql from "koa2-mysql-wrapper"

import config from '../config'
import { errorMiddleware } from '../src/middleware'

const app = new Koa()
app.keys = [config.session]

// mongoose.Promise = global.Promise
// mongoose.connect(config.database)

app.use(convert(logger()))
app.use(bodyParser())
// app.use(session())
app.use(errorMiddleware())
app.use(mysql(config.database))


const modules = require('../src/modules')
modules(app)

app.listen(config.port, () => {
  console.log(`Server started on ${config.port}, environment ${process.env.NODE_ENV}`)
})

export default app