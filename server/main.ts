import { NestFactory } from '@nestjs/core';
import { BundleBuilder } from '@nuxt/webpack';
import { Builder, Nuxt, } from 'nuxt';
// import * as dotenv from 'dotenv';

import config from '../nuxt.config';
import { AppModule } from './app.module';
import { NuxtFilter } from './nuxt.filter';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const client = new Nuxt(config);
  const server = await NestFactory.create(AppModule);

  // if (process.env.NODE_ENV === 'development') {
    new Builder(client, BundleBuilder).build();
  // } else {
  //   client.ready();
  // }

  server.useGlobalFilters(new NuxtFilter(client));

  await server.listen(3000);
}
bootstrap();
