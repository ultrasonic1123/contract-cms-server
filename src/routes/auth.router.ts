import { Request, Response, Router } from 'express'
import AuthController from '@/controllers/auth.controller'

const authController = new AuthController()
const router: Router = Router()

router.post('/login', authController.login)

export default router
