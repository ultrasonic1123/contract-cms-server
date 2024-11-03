import { Request, Response, NextFunction, Router } from 'express'
import BadRequest from '@/middlewares/exception/BadRequest'
import Container from 'typedi'
import { userService } from '@/services/user.service'

class UserController {
  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const data = await userService.getAll()
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const data = userService.create(request.body)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const data = userService.update(request.body)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default UserController
