import { Controller, Get } from '@nestjs/common';
import { AvatarService } from 'src/services/avatar.service';
import { ok, Response } from '../common/avatar.response';

@Controller('/api/avatar')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Get('/get')
  get(): Response<string> {
    return ok(this.avatarService.get());
  }
}
