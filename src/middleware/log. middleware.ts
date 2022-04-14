import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  private readonly logger: Logger = new Logger(LogMiddleware.name);
  private readonly GET_METHOD: string = 'GET';
  private readonly POST_METHOD: string = 'POST';

  use(req: any, res: Response, next: (error?: any) => void) {
    let requestLog = null;
    if (req.method === this.GET_METHOD) {
      requestLog = new RequestLog(
        req.originalUrl,
        req.method,
        req.params ? req.params : null,
      );
    } else if (req.method === this.POST_METHOD) {
      requestLog = new RequestLog(
        req.originalUrl,
        req.members,
        req.body ? req.body : null,
      );
    }
    this.logger.log(JSON.stringify(requestLog));
    next();
  }
}

class RequestLog {
  get url(): string {
    return this._url;
  }

  get method(): string {
    return this._method;
  }

  get params(): string {
    return this._params;
  }

  private readonly _url: string;
  private readonly _method: string;
  private readonly _params: string;

  constructor(url: string, method: string, params: string) {
    this._url = url;
    this._method = method;
    this._params = params;
  }
}
