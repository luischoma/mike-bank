import express from 'express'
import { userController } from '../controller/user.js'

const userRouter = express.Router()

userRouter.get('/:id', userController.getUserById)

userRouter.post('/', userController.createUser)

export default userRouter
