import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow: localhost (dev), any *.vercel.app deployment, and any explicit
  // origins listed in WEB_ORIGIN (comma-separated). Robust to env misconfig so
  // client-side fetches from the deployed frontend aren't blocked by CORS.
  const allowlist = (process.env.WEB_ORIGIN ?? 'http://localhost:3001')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      if (
        !origin ||
        allowlist.includes(origin) ||
        /^https?:\/\/localhost(:\d+)?$/.test(origin) ||
        /\.vercel\.app$/.test(origin)
      ) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
