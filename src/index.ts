import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import routes from './routes'

config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})