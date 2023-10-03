import { Connection } from '@/configs/db.config'
import { ListDto } from '@/dtos/base.dto'
import { User } from '@/entities/users.entity'
import { BaseService } from '@/utils/baseService'
import { PaginateConfig } from '@/utils/paginate'

class UserService {
  async getAll() {
    const users = await Connection.createQueryBuilder(User, 'users').getMany()
    return users
  }
}

export const userService = new UserService()
