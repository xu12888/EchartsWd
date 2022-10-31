/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('userApi')
export class UserController {
  @Get()
  @ApiOperation({ summary: '用户请求登录' })
  index() {
    return [{ id: 1, title: '博客1' }];
  }

  @Post()
  create() {
    success: true;
  }
}
