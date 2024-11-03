import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Contract } from './contract.entity'

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'date' })
  paymentDate: Date

  @Column()
  amount: number

  @Column()
  status: string

  @ManyToOne(() => Contract, (contract) => contract.payments)
  contract: Contract
}
