import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Project } from './project.entity'
import { Contract } from './contract.entity'

@Entity()
export class Phase {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'date' })
  timeline: Date

  @ManyToOne(() => Project, (project) => project.phases)
  project: Project

  @OneToOne(() => Contract)
  @JoinColumn()
  contract: Contract
}
