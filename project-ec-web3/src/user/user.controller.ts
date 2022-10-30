/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('userApi')
export class UserController {
  @Get()
  index() {
    return [];
  }

  @Post()
  create() {
    success: true;
  }
}
