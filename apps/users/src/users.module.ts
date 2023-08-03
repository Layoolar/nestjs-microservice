import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import * as Joi from 'joi'
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [ConfigModule.forRoot({

  isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required(),
      PORT: Joi.string().required()
    }),
    envFilePath: './apps/users/.env',
  }),
  DatabaseModule,
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])
],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
