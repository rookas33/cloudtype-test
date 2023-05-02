import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // DTO 유효성 검사 코드
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useStaticAssets(join(__dirname, '..', 'src', 'public')); // 정적파일제공 (nest모듈로했으니 안해도된다.)
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views')); // dir
  app.setViewEngine('ejs'); // 템플릿 엔진설정

  // prefix 예외처리
  app.setGlobalPrefix('api', {
    exclude: [{ path: '', method: RequestMethod.GET }],
  });

  const port = process.env.PORT;
  await app.listen(port);
  console.log(`${port} 서버가 열렸어요`);
}
bootstrap();
