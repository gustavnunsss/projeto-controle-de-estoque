import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const created = await this.prisma.product.create({
      data: data,
    });

    return created;
  }

  async findAll(search?: string) {
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
}
