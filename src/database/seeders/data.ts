import { CreateUserDto } from 'src/modules/auth/dto/user/create-user.dto';
import { CreateRoleDto } from 'src/modules/teams/dto';

export const roles: CreateRoleDto[] = [
  {
    name: 'ADMIN',
    code: 1,
  },
  {
    name: 'REVIEWER',
    code: 2,
  },
  {
    name: 'MEMBER',
    code: 3,
  },
];

export const users: CreateUserDto[] = [
  {
    username: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password',
  },
  {
    username: 'Casey Doe',
    email: 'casey.doe@example.com',
    password: 'password',
  },
  {
    username: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password',
  },
  {
    username: 'Bobby Brown',
    email: 'bobby.brown@example.com',
    password: 'password',
  },
];
