import {NestFactory} from '@nestjs/core';
import {BundleBuilder} from '@nuxt/webpack';
import {Builder, Nuxt,} from 'nuxt';

import {AppModule} from './app.module';
import {SSRFilter} from './ssr.filter';
import config from '../nuxt.config';


(async () => {
  const client = new Nuxt(config);
  const server = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    new Builder(client, BundleBuilder).build();
  } else {
    client.ready();
  }

  server.useGlobalFilters(new SSRFilter(client));

  await server.listen(3000);
})();
