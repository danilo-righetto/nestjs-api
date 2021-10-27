import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './../config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('mysqlOptions'),
      inject: [ConfigService],
    }),
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
