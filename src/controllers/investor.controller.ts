import { Request, Response, NextFunction, Router } from 'express'
import BadRequest from '@/middlewares/exception/BadRequest'
import { investorService } from '@/services/investor.service'

class InvestorController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const body = request.body
      const data = await investorService.create(body)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const body = request.body
      const data = await investorService.update(body)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async find(request: Request, response: Response, next: NextFunction) {
    try {
      const query = request.query
      const data = await investorService.list(query)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async findOne(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params
      const data = await investorService.findOne(+id)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default InvestorController
