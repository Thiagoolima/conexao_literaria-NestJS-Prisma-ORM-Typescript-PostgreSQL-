import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.port || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    console.log(`Server is running on the port${PORT}`),
  );
}
bootstrap();
