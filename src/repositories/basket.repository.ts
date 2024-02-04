import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

class BasketRepositories {
  userRepo: Prisma.UserDelegate<DefaultArgs>;
  constructor() {
    this.userRepo = new PrismaClient().user;
  }

  async create(productId: string, id: string) {
    try {
      const basket = await this.userRepo.update({
        where: { id: +id },
        data: { products: { create: { productId: +productId } } },
        include: { products: true },
      });
      return basket;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(id: string) {
    try {
      const productsByUser = await this.userRepo.findUnique({
        where: { id: +id },
        select: { products: true },
      });
      return productsByUser;
    } catch (error) {
      throw error;
    }
  }

  async allByUser(id: string) {
    try {
      const productsByUser = await this.userRepo.findUnique({
        where: { id: +id },
        select: { products: { select: { product: true } } },
      });
      return productsByUser;
    } catch (error) {
      throw error;
    }
  }
}

export default new BasketRepositories();
