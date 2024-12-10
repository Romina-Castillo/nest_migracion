import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.findAll();
  }

  @Post()
  createCustomer(@Body() customerData) {
    return this.customerService.create(customerData);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.delete(id);
  }
}
