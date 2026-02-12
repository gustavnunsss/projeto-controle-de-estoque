import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(data: { name: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.clients.create({
      data,
    });
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.clients.findMany();
  }
}
