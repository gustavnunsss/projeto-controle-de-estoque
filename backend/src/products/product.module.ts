// backend/src/prodcut/product.module.ts
import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, ProductService],
})
export class ProductModule {}
