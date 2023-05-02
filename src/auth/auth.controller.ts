import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('social-log-in')
  social() {}
}
