import { Request, Response, Router } from 'express'
import UserController from '@/controllers/user.controller'

const userController = new UserController()
const router: Router = Router()

router.get('/', userController.loggingIn)

export default router
