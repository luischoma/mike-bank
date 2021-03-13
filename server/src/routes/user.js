import express from 'express'

import authenticationMiddleware from '../middlewares/auth.js'

import { userController } from '../controller/user.js'

const userRouter = express.Router()

userRouter.get('/', authenticationMiddleware, userController.getUserById)

userRouter.post('/', userController.createUser)
userRouter.post('/login', userController.authenticateUser)

export default userRouter
