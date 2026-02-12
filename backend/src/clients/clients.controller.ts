import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.clientsService.findAll();
  }

  @Post()
  create() {
    return this.clientsService.create();
  }
}
