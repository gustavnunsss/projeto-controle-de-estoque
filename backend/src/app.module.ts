import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { ProductModule } from './products/product.module';
import { SalesModule } from './sales/sales.module';
import { DashbordModule } from './dashboards/dashboard.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ProductModule,
    SalesModule,
    DashbordModule,
    ClientsModule,
  ],
})
export class AppModule {}
