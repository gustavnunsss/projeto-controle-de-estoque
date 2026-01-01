export class CreateSaleDto {
  customer: string;
  dueDate: Date;
  items: {
    productId: string;
    quantity: number;
  }[];
}
