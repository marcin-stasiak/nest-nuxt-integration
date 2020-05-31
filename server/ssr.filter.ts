import {ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException} from '@nestjs/common';
import { Nuxt } from 'nuxt';


@Catch(NotFoundException)
export class SSRFilter implements ExceptionFilter {
  private readonly nuxt: Nuxt;

  constructor(nuxt: Nuxt) {
    this.nuxt = nuxt;
  }

  public async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (status === 404) {
      if (!response.headersSent) {
        await this.nuxt.render(request, response);
      }
    } else {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
