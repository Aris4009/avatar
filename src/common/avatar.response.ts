export class Response<T> {
  private code: number;
  private status: string;
  private data: T;
  private msg: string;

  constructor(code: number, status: string, data: T, msg: string) {
    this.code = code;
    this.status = status;
    this.data = data;
    this.msg = msg;
  }
}

export function ok<T>(data: T): Response<T> {
  return new Response(200, 'ok', data, null);
}

export function fail<T>(data: T, msg: string): Response<T> {
  return new Response(500, 'fail', data, msg);
}
