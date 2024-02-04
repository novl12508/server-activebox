import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IPostDataCreate } from "posts/posts.service.js";

class PostRepositories {
  postRepo: Prisma.PostDelegate<DefaultArgs>;
  constructor() {
    this.postRepo = new PrismaClient().post;
  }

  async findByOne(id: string) {
    try {
      const user = await this.postRepo.findUnique({ where: { id: +id } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.postRepo.findMany();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async create({ data, user }: IPostDataCreate) {
    try {
      const userCreate = await this.postRepo.create({
        data: { body: data.body, title: data.title, userId: user.id },
      });
      return userCreate;
    } catch (error) {
      throw error;
    }
  }
}

export default new PostRepositories();
