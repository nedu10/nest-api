import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import configs from './configs/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(configs.MongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
