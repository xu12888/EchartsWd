import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique('index_name', ['identityType', 'identity'])
export class UserAuth {
  @PrimaryGeneratedColumn({
    comment: 'ID',
  })
  authId?: number;

  @Column({
    comment: '用户ID',
  })
  userId: number;

  @Column({
    comment: 'ID',
  })
  identityType: string;

  @Column({
    comment: '身份标识',
  })
  identity: string;

  @Column({
    comment: '身份验证标识',
  })
  credential: string;

  @Column({
    comment: '是否安全',
  })
  insecurity: boolean;

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
