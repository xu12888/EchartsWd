import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({
    comment: '用户ID',
  })
  userId?: number;

  @Column({
    comment: '用户名',
  })
  username: string;

  @Column({
    comment: '姓名',
  })
  name: string;

  @Column({
    comment: '昵称',
  })
  nickName: string;

  @Column({
    comment: '性别',
    length: 10,
  })
  gender: string;

  @Column({
    comment: '手机号码',
  })
  phone: string;

  @Column({
    comment: '邮箱',
  })
  email: string;

  @Column({
    comment: '头像',
  })
  avatar: string;

  @CreateDateColumn({
    type: 'timestamp',
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    comment: '更新时间',
  })
  updateTime: Date;
}
