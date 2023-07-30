import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as Joi from 'joi'
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required(),
    }),
    envFilePath: './apps/users/.env',
  }),
  DatabaseModule,
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
