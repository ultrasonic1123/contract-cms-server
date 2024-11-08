import { Connection } from '@/configs/db.config'
import { envConfig } from '@/configs/env.config'
import { ListDto } from '@/dtos/base.dto'
import { User } from '@/entities/users.entity'
import { ERole } from '@/enums/role.enum'
import BadRequest from '@/middlewares/exception/BadRequest'
import { BaseService } from '@/utils/baseService'
import { PaginateConfig } from '@/utils/paginate'
import jwt from 'jsonwebtoken'

class UserService {
  async getAll() {
    const users = await Connection.createQueryBuilder(User, 'users').getMany()
    return users
  }

  async create(payload: any) {
    const newUser: User = {
      ...payload,
      role: payload.role === 'employee' ? ERole.Sale : payload.role === 'director' ? ERole.Director : ERole.SuperAdmin
    }
    const temp = Connection.getRepository(User).create(newUser)
    temp.setPassword(payload.password)
    return temp.save()
  }

  async update(payload: any) {
    return Connection.getRepository(User).save(payload)
  }

  async inActive(id: number, { active }: { active: string }) {
    const user = await Connection.getRepository(User).findOne({
      where: {
        id
      }
    })

    user.active = active.toString() == 'true'

    return user.save()
  }

  async login({ username, password }: any) {
    const user = await Connection.getRepository(User).findOne({
      where: { username }
    })

    if (!user) throw new BadRequest({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' })
    if (!user.comparePassword(password)) throw new BadRequest({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' })
    if (!user.active) throw new BadRequest({ message: 'Người dùng chưa kích hoạt!' })

    const token = await this.generateToken(user)

    return {
      ...user,
      ...token
    }
  }

  async generateToken(user: User) {
    const token = jwt.sign({ sub: user.id }, envConfig.JWT_SECRET, { expiresIn: '30d' })
    const rfToken = jwt.sign({ sub: user.id }, envConfig.JWT_RT_SECRET, { expiresIn: '30d' })

    return {
      accessToken: token,
      refreshToken: rfToken
    }
  }
}

export const userService = new UserService()
