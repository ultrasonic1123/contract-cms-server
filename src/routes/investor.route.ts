import { Request, Response, Router } from 'express'
import InvestorController from '@/controllers/investor.controller'

const controller = new InvestorController()
const router: Router = Router()

router.post('/', controller.create)
router.put('/', controller.update)
router.get('/', controller.find)
router.get('/:id', controller.findOne)

export default router
