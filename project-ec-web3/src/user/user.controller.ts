/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
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
