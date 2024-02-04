import { Response } from "express";
import postsService from "./posts.service.js";
import { IRequest } from "middlewares/auth.middleware.js";
import { validationResult } from "express-validator";

export interface IPostsData {
  title: string;
  body: string;
}

class PostsController {
  async getAll(req: IRequest, res: Response) {
    try {
      const posts = await postsService.all();
      res.json(posts);
    } catch (err) {
      console.error(err);
    }
  }
  async create(req: IRequest, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        console.log(result.array());
        res.status(400).json({ message: "Некорректные данные" });
      }

      const data = req.body as IPostsData;
      const user = req.user;
      const posts = await postsService.create({ data, user });
      console.log(posts);
      res.json(posts);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new PostsController();
