import { Request, Response, NextFunction, Router } from 'express'
import BadRequest from '@/middlewares/exception/BadRequest'
import Container from 'typedi'
import { userService } from '@/services/user.service'

class UserController {
  async loggingIn(request: Request, response: Response, next: NextFunction) {
    try {
      const data = userService.getAll()

      response.customSuccess(200, {})
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default UserController
