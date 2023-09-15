import { Request, Response, NextFunction, Router } from 'express'
import BadRequest from '@/middlewares/exception/BadRequest'

class UserController {
  async loggingIn(request: Request, response: Response, next: NextFunction) {
    try {
      const a = 0
      //   if (a == 0) throw 'aksk'
      response.customSuccess(200, { a: a })
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default UserController
