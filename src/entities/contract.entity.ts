import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { Document } from './document.entity'
import { Payment } from './payment.entity'

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  contractNumber: string

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'date' })
  signingDate: Date

  @Column()
  contractValue: number

  @OneToMany(() => Document, (document) => document.contract)
  documents: Document[]

  @OneToMany(() => Payment, (payment) => payment.contract)
  payments: Payment[]
}
