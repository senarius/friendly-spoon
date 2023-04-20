import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoutes from './routes'
import bodyParser from 'body-parser'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1', bookRoutes)
// MONGODB_URI=mongodb+srv://senariuss:mongodb159753@cluster0.afou67u.mongodb.net/app1db?retryWrites=true&w=majority

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.afou67u.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri: string = `mongodb+srv://senariuss:mongodb159753@cluster0.afou67u.mongodb.net/app1db?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error
  })

export default app
