import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Project } from './project.entity'

@Entity()
export class Investor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @OneToMany(() => Project, (project) => project.investor)
  projects: Project[]
}
