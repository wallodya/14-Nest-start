import { Controller, Get, Ip } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('ip')
  getIp(@Ip() ip): string {
    return `Your ip is: ${ip}`;
  }

  @Get('user')
  getUser(): string {
    return 'User abc';
  }

  @Get('user/profile')
  getUserProfile(): string {
    return 'User profile';
  }
}
