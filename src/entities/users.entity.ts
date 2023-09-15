import { Column, Entity } from 'typeorm'
import { AbstractEntity } from './base.entity'
import { Exclude } from 'class-transformer'
import { ERole } from '@/enums/role.enum'

import * as bcrypt from 'bcrypt'

@Entity()
export class User extends AbstractEntity {
  @Column({ nullable: true })
  username!: string

  @Column()
  @Exclude()
  password!: string

  @Column({ unique: true })
  @Exclude()
  email!: string

  @Column({ nullable: true })
  avatar!: string

  @Column({ default: '500000' })
  coin!: string

  @Column({ nullable: false, type: 'enum', enum: ERole, default: ERole.Guest })
  role!: ERole

  setPassword(password: string) {
    this.password = bcrypt.hashSync(password, 10)
  }

  comparePassword(rawPassword: string): boolean {
    const userPassword = this.password
    return bcrypt.compareSync(rawPassword, userPassword)
  }
}
