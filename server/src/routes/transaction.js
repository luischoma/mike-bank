import express from 'express'

import authenticationMiddleware from '../middlewares/auth.js'

import { transactionController } from '../controller/transaction.js'

const transactionRouter = express.Router()

transactionRouter.get('/user', authenticationMiddleware, transactionController.getTransactionsByUserId)

transactionRouter.post('/', authenticationMiddleware, transactionController.createTransaction)

export default transactionRouter
