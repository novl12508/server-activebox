import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IProductData } from "products/products.interface";

class ProductRepositories {
  poductRepo: Prisma.ProductDelegate<DefaultArgs>;
  constructor() {
    this.poductRepo = new PrismaClient().product;
  }

  async findByOne(id: string) {
    try {
      const user = await this.poductRepo.findUnique({ where: { id: +id } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.poductRepo.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async create(data: IProductData) {
    try {
      const product = await this.poductRepo.create({ data });
      return product;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductRepositories();
