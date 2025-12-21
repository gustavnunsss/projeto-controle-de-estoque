import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getProducts(@Query('search') search?: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await this.prisma.product.findMany({
      where: search
        ? {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          }
        : {},
    });
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.product.create({
      data: body,
    });
  }
}
