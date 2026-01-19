import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('sales')
  getSales() {
    return this.dashboardService.findAll();
  }

  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }
}
