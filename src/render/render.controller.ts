import { Controller, Get, Render, UseGuards, Req } from '@nestjs/common';

@Controller('')
export class RenderController {
  @Get('')
  @Render('index')
  socialLogIn() {
    return { component: 'socialLogIn' };
  }
}
