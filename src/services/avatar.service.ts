import { Injectable } from '@nestjs/common';
import multiavatar from '@multiavatar/multiavatar';

@Injectable()
export class AvatarService {
  get(str: string): string {
    return multiavatar(str);
  }
}
