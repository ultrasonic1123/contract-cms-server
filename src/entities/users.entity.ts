import { Column, Entity } from 'typeorm'
import { AbstractEntity } from './base.entity'
import { Exclude } from 'class-transformer'
import { ERole } from '@/enums/role.enum'

import * as bcrypt from 'bcryptjs'

@Entity()
export class User extends AbstractEntity {
  @Column({})
  username: string

  @Column()
  fullname: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  avatar: string

  @Column({ type: 'enum', enum: ERole })
  role: ERole

  @Column({ default: true })
  active: boolean

  setPassword(password: string) {
    this.password = bcrypt.hashSync(password, 10)
  }

  comparePassword(rawPassword: string): boolean {
    const userPassword = this.password
    return bcrypt.compareSync(rawPassword, userPassword)
  }
}
