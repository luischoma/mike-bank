import express from 'express'
import { userController } from '../controller/user.js'

const userRouter = express.Router()

userRouter.get('/', userController.getAllUsers)

export default userRouter
