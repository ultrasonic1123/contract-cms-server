import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Contract } from './contract.entity'
import { Job } from './job.entity'

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'text', nullable: true })
  description: string

  @OneToMany(() => Job, (job) => job.service)
  jobs: Job[]

  @OneToOne(() => Contract)
  @JoinColumn()
  contract: Contract
}
