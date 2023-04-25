import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoutes from './routes'
import bodyParser from 'body-parser'
import Database from './db'

const app: Express = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1', bookRoutes)

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  Database.getInstance()
}

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({message: 'Hello World!'})
})

export default app
