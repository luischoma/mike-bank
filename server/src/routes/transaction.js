import express from 'express'
import { transactionController } from '../controller/transaction.js'

const transactionRouter = express.Router()

transactionRouter.get('/user/:id', transactionController.getTransactionsByUserId)

transactionRouter.post('/', transactionController.createTransaction)

export default transactionRouter
