import { IPostsData } from "./posts.controller.js";
import { IUser } from "../middlewares/auth.middleware.js";
import postRepositories from "../repositories/post.repository.js";
import userRepositories from "../repositories/user.repository.js";

export interface IPostDataCreate {
  data: IPostsData;
  user: IUser;
}

class PostsServices {
  async all() {
    try {
      const posts = await postRepositories.findAll();
      return posts;
    } catch (err) {
      throw err;
    }
  }

  async create(data: { data: IPostsData; user: IUser }) {
    try {
      const userFind = await userRepositories.findByOne(data.user.email);

      if (!userFind) {
        throw new Error("Авторизуйтесь");
      }
      const post = await postRepositories.create(data);
      return post;
    } catch (err) {
      throw err;
    }
  }
}

export default new PostsServices();
