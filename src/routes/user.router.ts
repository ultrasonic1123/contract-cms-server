import { Request, Response, Router } from 'express'
import UserController from '@/controllers/user.controller'

const userController = new UserController()
const router: Router = Router()

router.post('/', userController.create)
router.put('/', userController.update)
router.get('/', userController.list)

export default router
