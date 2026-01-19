import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.sale.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        receivable: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async getStats() {
    const totalVendas = await this.prisma.accountReceivable.aggregate({
      _sum: { amount: true },
    });

    const vendasPagas = await this.prisma.accountReceivable.aggregate({
      _sum: { amount: true },
      where: { status: 'PAID' },
    });

    const vendasPendentes = await this.prisma.accountReceivable.aggregate({
      _sum: { amount: true },
      where: { status: 'PENDING' },
    });

    const vendasCanceladas = await this.prisma.accountReceivable.aggregate({
      _sum: { amount: true },
      where: { status: 'LATE' },
    });

    return {
      totalVendas: totalVendas._sum.amount ?? 0,
      vendasPagas: vendasPagas._sum.amount ?? 0,
      vendasPendentes: vendasPendentes._sum.amount ?? 0,
      vendasCanceladas: vendasCanceladas._sum.amount ?? 0,
    };
  }
}
