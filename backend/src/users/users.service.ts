import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    userName: string;
    password: string; 
}

const users: User[] = [
    {
        userId: 1,
        userName: 'Gustavo',
        password: '1234@5',
    },
    {
        userId: 2,
        userName: 'Louis',
        password: '123@4',
    },

];

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<User | undefined> {
        return users.find((user) => user.username === username);
    }
}
   