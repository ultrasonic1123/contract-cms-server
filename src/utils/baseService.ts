import { FindManyOptions, FindOneOptions, Repository, SelectQueryBuilder } from 'typeorm'
import { paginate, PaginateConfig, PaginateQuery } from './paginate'

export abstract class BaseService<T> {
  async listWithPage(
    repository: Repository<T>,
    query: PaginateQuery,
    config: PaginateConfig<T>,
    customQuery?: Repository<T> | SelectQueryBuilder<T>
  ) {
    if (customQuery) {
      return paginate<T>(query, customQuery, config)
    }
    return paginate<T>(query, repository, config)
  }
}
