import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(@Query('search') search?: string) {
    const products = await this.productService.findAll(search);

    return products;
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto) {
    const created = await this.productService.create(body);

    return created;
  }
}
