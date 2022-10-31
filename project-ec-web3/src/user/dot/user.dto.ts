import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty, IsString } from 'class-validator';
import { GenderType } from '../types/user';
const validateMsg = {
  message: '60001|必须输入合法的用户名和密码!',
};

export class LoginDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsNotEmpty(validateMsg)
  @IsString()
  @MaxLength(60, validateMsg)
  readonly username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty(validateMsg)
  @IsString()
  @MaxLength(60, validateMsg)
  readonly password: string;
}

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsNotEmpty({ message: '60002|必须输入登录用户名!' })
  readonly username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty(validateMsg)
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: '用户名称',
  })
  @IsNotEmpty({ message: '60005|必须输入用户姓名!' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: '昵称',
  })
  readonly nickName: string;

  @ApiProperty({
    description: '性别',
    enum: GenderType,
  })
  readonly gender: GenderType;

  @ApiProperty({
    description: '手机号',
  })
  readonly phone: string;

  @ApiProperty({
    description: '邮箱',
  })
  readonly email: string;

  @ApiProperty({
    description: '头像地址',
  })
  readonly avatar: string;
}
