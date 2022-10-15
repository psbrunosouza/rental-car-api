import { v4 as uuidv4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { ICategoryDTO } from "../dtos/ICategoryDTO";

@Entity("categories")
export class Category implements ICategoryDTO {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt?: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
