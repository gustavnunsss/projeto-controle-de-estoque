/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: 1,
      username: 'louis',
      password: '1234',
    },
  ];

  async findUserByName(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);

    return user ?? null;
  }
}
