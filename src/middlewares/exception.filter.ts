import { NextFunction, Request, Response } from 'express'
import HttpException from '@/utils/httpException'

function exceptionFilter(error: HttpException, req: Request, res: Response, next: NextFunction) {
  console.log('vao day')

  const status = error.status || 500
  const message = error.message || 'Something went wrong'
  res.status(status).send({
    ...error,
    message,
    status
  })
}

export default exceptionFilter
