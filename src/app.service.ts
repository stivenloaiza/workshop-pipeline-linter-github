import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let points = 0;
    return 'Hello World!';
  }
}
