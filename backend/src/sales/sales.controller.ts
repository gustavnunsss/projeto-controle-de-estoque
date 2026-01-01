import { Controller, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create.sales.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async create(@Body() dto: CreateSaleDto) {
    return this.salesService.create(dto);
  }
}
