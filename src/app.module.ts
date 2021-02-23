import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from './snake-naming-strategy'
import { TestModel } from './test.entity'
@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      url: 'mongodb://mongodb:27017/test',
      type: 'mongodb',
      entities: ["dist/**/*.entity{.ts,.js}"],
      useUnifiedTopology: true,
      namingStrategy: new SnakeNamingStrategy()
    })
  }), TypeOrmModule.forFeature(
    [TestModel])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
