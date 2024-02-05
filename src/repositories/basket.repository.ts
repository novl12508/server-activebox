import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

class BasketRepositories {
  userRepo: Prisma.UserDelegate<DefaultArgs>;
  basketRepo: Prisma.BasketDelegate<DefaultArgs>;
  constructor() {
    this.userRepo = new PrismaClient().user;
    this.basketRepo = new PrismaClient().basket;
  }

  async create(id: number, productId: string, img: string) {
    try {
      console.log(productId);
      const basket = await this.userRepo.update({
        where: { id: +id },
        data: { products: { create: { productId: +productId, img } } },
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

  async allByUser(id: number) {
    try {
      const productsByUser = await this.userRepo.findUnique({
        where: { id: +id },
        select: {
          products: { select: { product: true, img: true, id: true } },
        },
      });
      return productsByUser;
    } catch (error) {
      throw error;
    }
  }

  async delete(productId: number) {
    try {
      console.log(productId, "REPO");
      await this.basketRepo.delete({
        where: { id: productId },
      });
      return;
    } catch (error) {
      throw error;
    }
  }
}

export default new BasketRepositories();
