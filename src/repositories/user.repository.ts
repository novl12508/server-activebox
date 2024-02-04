import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IUser } from "../auth/interface/login.interface.js";

class UserRepositories {
  userRepo: Prisma.UserDelegate<DefaultArgs>;
  constructor() {
    this.userRepo = new PrismaClient().user;
  }

  async findByOne(email: string) {
    try {
      const user = await this.userRepo.findUnique({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.userRepo.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async create(data: IUser) {
    try {
      const user = await this.userRepo.create({ data });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserRepositories();
