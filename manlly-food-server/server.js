import express from "express"
import * as dotenv from "dotenv"
import {foodRouter, orderRouter, usersRouter} from './routes/index.js'
import connect from "./database/database.js"
import cors from 'cors'

dotenv.config()
const port = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/foods', foodRouter)
app.use('/orders', orderRouter)

app.get('/', (req, res) => {
  res.send ('home page')
})


app.listen(port, async() => {
  await connect()
  console.log('listening on port: ' + port)
})
