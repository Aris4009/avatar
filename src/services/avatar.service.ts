import { Injectable } from '@nestjs/common';
import multiavatar from '@multiavatar/multiavatar';

@Injectable()
export class AvatarService {
  get(): string {
    return multiavatar('1');
  }
}
