import { AbstractEntity } from './base.entity'
import { Exclude } from 'class-transformer'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { Phase } from './phase.entity'
import { Investor } from './investor.entity'

@Entity()
export class Project extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  code: string

  @Column()
  name: string

  @Column({ type: 'date' })
  startDate: Date

  @Column({ type: 'date', nullable: true })
  endDate: Date

  @OneToMany(() => Phase, (phase) => phase.project)
  phases: Phase[]

  @ManyToOne(() => Investor, (investor) => investor.projects)
  investor: Investor
}
