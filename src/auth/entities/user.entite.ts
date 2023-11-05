import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Posts } from "../../posts/entities/posts.entite.js";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Posts, (posts) => posts.user)
  posts: Posts[];
}
