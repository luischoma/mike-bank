import express from 'express'
import { userController } from '../controller/user.js'

const userRouter = express.Router()

userRouter.get('/', userController.getAllUsers)
userRouter.post('/', userController.createUser)
export default userRouter
