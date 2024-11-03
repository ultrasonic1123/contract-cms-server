import { Request, Response, NextFunction, Router } from 'express'
import BadRequest from '@/middlewares/exception/BadRequest'
import { userService } from '@/services/user.service'

class AuthController {
  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const body = request.body
      const data = await userService.login(body)
      response.customSuccess(200, data)
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default AuthController
