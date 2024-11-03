import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Contract } from './contract.entity'

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  documentCode: string

  @Column()
  documentType: string

  @Column()
  filePath: string

  @ManyToOne(() => Contract, (contract) => contract.documents)
  contract: Contract
}
