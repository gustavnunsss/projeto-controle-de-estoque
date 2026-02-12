import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  client: any;
  private _clients: any;
  public get clients(): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._clients;
  }
  public set clients(value: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this._clients = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
