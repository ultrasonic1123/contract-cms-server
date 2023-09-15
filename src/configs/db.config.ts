import { DataSource } from 'typeorm'
import { envConfig } from './env.config'

export const Connection = new DataSource({
  type: 'postgres',
  host: envConfig.DB_HOST,
  port: envConfig.DB_PORT,
  username: envConfig.DB_USERNAME,
  password: envConfig.DB_PASSWORD,
  database: envConfig.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['src/**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: []
})
