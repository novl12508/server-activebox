import { Request, Response } from "express";

class PostsController {
  getAll(req: Request, res: Response) {
    res.json({ posts: "POSTS" });
  }
}

export default new PostsController();
