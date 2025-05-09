import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
  logger.debug(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
