import { Posts } from "./entities/posts.entite.js";
import { AppBD } from "../bd.js";
import { Repository } from "typeorm";
import { IPostsData } from "./posts.controller.js";
import { User } from "../auth/entities/user.entite.js";
import { IUser } from "middlewares/auth.middleware.js";

class PostsServices {
  postsRepo: Repository<Posts>;
  userRepo: Repository<User>;
  constructor() {
    this.postsRepo = AppBD.getRepository(Posts);
    this.userRepo = AppBD.getRepository(User);
  }

  async all() {
    try {
      const posts = await this.postsRepo.find({
        relations: { user: true },
        select: { user: { name: true } },
      });
      return posts;
    } catch (err) {
      throw err;
    }
  }

  async create(data: { data: IPostsData; user: IUser }) {
    try {
      const user = await this.userRepo.findOne({
        select: { id: true, email: true },
        where: { email: data.user.email },
      });

      if (!user) {
        throw new Error("Авторизуйтесь");
      }
      const postCreate = await this.postsRepo.create({
        ...data.data,
        user: { id: user.id, name: user.name },
      });
      const posts = await this.postsRepo.save(postCreate);
      return posts;
    } catch (err) {
      throw err;
    }
  }
}

export default new PostsServices();
