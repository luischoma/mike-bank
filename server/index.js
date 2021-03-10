import express from 'express'
import userRouter from './src/routes/user.js'
import transactionRouter from './src/routes/transaction.js'

import { databaseClient } from './src/clients/db/client.js'

const PORT = 3001

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// By doing this, every request is going to use the same db client
app.use((req, res, next) => {
  req.con = databaseClient()
  next()
})

app.use('/user', userRouter)
app.use('/transaction', transactionRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
