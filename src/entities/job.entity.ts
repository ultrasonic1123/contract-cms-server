import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Service } from './service.entity'

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'text', nullable: true })
  description: string

  @ManyToOne(() => Service, (service) => service.jobs)
  service: Service
}
