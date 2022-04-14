import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvatarController } from './controller/avatar.controller';
import { LogMiddleware } from './middleware/log. middleware';
import { AvatarService } from './services/avatar.service';

@Module({
  imports: [],
  controllers: [AppController, AvatarController],
  providers: [AppService, AvatarService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('api');
  }
}
