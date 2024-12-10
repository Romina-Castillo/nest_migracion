import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  private customers = [];

  findAll() {
    return this.customers;
  }

  create(customerData) {
    this.customers.push(customerData);
    return { message: 'Customer created successfully' };
  }

  delete(id: string) {
    this.customers = this.customers.filter((_, index) => index !== parseInt(id));
    return { message: 'Customer deleted successfully' };
  }
}
