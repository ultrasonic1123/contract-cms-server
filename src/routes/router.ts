import { Router } from 'express'
import userRouter from './user.router'
import authRouter from './auth.router'
import investorRouter from './investor.route'

const router: Router = Router()
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/investor', investorRouter)

export default router
