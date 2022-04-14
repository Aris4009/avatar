import { Controller, Get, Logger, Query } from '@nestjs/common';
import { AvatarService } from 'src/services/avatar.service';
import { ok, Response } from '../common/avatar.response';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import path from 'path';
import fs, { writeFileSync } from 'fs';
import { svg2png } from 'svg-png-converter';

@Controller('/api/avatar')
export class AvatarController {
  private readonly log: Logger = new Logger(AvatarController.name);
  private readonly imagePath: string = path.join(__dirname, '../resources');

  constructor(private readonly avatarService: AvatarService) {}

  @Get('/get')
  async get(@Query('num') num: number): Promise<Response<string>> {
    this.log.log(num);
    if (!num || num < 1) {
      num = 1;
    }
    if (!fs.existsSync(this.imagePath)) {
      fs.mkdirSync(this.imagePath);
    }
    for (let i = 0; i < num; i++) {
      const str = randomStringGenerator();
      const svg = this.avatarService.get(str);
      const output = await svg2png({
        input: svg,
        encoding: 'buffer',
        format: 'png',
      });
      writeFileSync(path.join(this.imagePath, str + '.png'), output);
    }
    return ok(null);
  }
}
