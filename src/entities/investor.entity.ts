import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Project } from './project.entity'
import { AbstractEntity } from './base.entity'

@Entity()
export class Investor extends AbstractEntity {
  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @OneToMany(() => Project, (project) => project.investor)
  projects: Project[]
}
