import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    if (data) {
      delete req.user.password;
      return req.user;
    }
    throw new UnauthorizedException("You don't have sufficient Permissions");
  },
);
