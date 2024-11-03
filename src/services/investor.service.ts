import { Investor } from './../entities/investor.entity'
import { Connection } from '@/configs/db.config'
import { envConfig } from '@/configs/env.config'
import { ListDto } from '@/dtos/base.dto'
import { BaseService } from '@/utils/baseService'
import { PaginateConfig } from '@/utils/paginate'
import { Repository } from 'typeorm'

class InvestorService extends BaseService<Investor> {
  private repository: Repository<Investor>
  constructor() {
    super()
    this.repository = Connection.getRepository(Investor)
  }

  async list(query: ListDto) {
    const config: PaginateConfig<Investor> = {
      sortableColumns: ['createdAt', 'updatedAt']
    }

    return this.listWithPage(this.repository, query, config)
  }

  async findOne(id: number) {
    return this.repository.findOne({ where: { id } })
  }

  async create(payload: any) {
    return this.repository.save(payload)
  }

  async update(payload: any) {
    return this.repository.save(payload)
  }
}

export const investorService = new InvestorService()
