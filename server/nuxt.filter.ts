import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Nuxt } from 'nuxt';

@Catch()
export class NuxtFilter implements ExceptionFilter {
  private readonly nuxt: Nuxt;

  constructor(nuxt: Nuxt) {
    this.nuxt = nuxt;
  }

  public async catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    if (status === 404) {
      if (!res.headersSent) {
        await this.nuxt.render(req, res);
      }
    } else {
      res.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.url,
      });
    }
  }
}
