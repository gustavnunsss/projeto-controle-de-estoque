import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.clientsService.findAll();
  }
}
