import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  create() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.clients.findMany();
  }
}
