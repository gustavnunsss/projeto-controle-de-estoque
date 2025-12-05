import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    usersName: string;
    password: string; 
}

const users: User[] = [
    {
        userId: 1,
        usersName: 'Gustavo',
        password: '1234@5',
    },
    {
        userId: 2,
        usersName: 'Louis',
        password: '123@4',
    },

];

@Injectable()
export class UsersService {
    async findUserByName(usersname: string): Promise<User | undefined> {
        return users.find((users) => users.usersName === usersname);
    }
}
   