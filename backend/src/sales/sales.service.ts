import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentStatus } from '@prisma/client';
import { CreateSaleDto } from './dto/create.sales.dto';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSaleDto) {
    return this.prisma.$transaction(async (tx) => {
      let totalAmount = 0;

      // Buscar produtos envolvidos
      const products = await tx.product.findMany({
        where: {
          id: {
            in: dto.items.map((item) => item.productId),
          },
        },
      });

      // Validar estoque e calcular total
      for (const item of dto.items) {
        const product = products.find((p) => p.id === item.productId);

        if (!product) {
          throw new BadRequestException(`Produto não encontrado`);
        }

        if (product.stockQuantity < item.quantity) {
          throw new BadRequestException(
            `Estoque insuficiente para ${product.name}`,
          );
        }

        totalAmount += product.price * item.quantity;
      }

      // Criar venda
      const sale = await tx.sale.create({
        data: {
          customer: dto.customer,
        },
      });

      // Criar itens da venda + baixar estoque
      for (const item of dto.items) {
        const product = products.find((p) => p.id === item.productId)!;

        await tx.saleItem.create({
          data: {
            saleId: sale.id,
            productId: product.id,
            quantity: item.quantity,
            unitPrice: product.price,
          },
        });

        await tx.product.update({
          where: { id: product.id },
          data: {
            stockQuantity: {
              decrement: item.quantity,
            },
          },
        });
      }

      // Criar conta a receber
      await tx.accountReceivable.create({
        data: {
          saleId: sale.id,
          amount: totalAmount,
          dueDate: dto.dueDate,
          status: PaymentStatus.PENDING,
        },
      });

      return sale;
    });
  }
}
