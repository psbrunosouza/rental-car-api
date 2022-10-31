import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidv4} from "uuid";
import {ISpecificationDTO} from "@modules/especifications/dtos/ISpecificationDTO";

@Entity('specifications')
export class Specifications implements ISpecificationDTO {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({name: 'created_at' })
  createdAt?: Date;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt?: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: Date;

  constructor() {
    if(!this.id){
      this.id = uuidv4();
    }
  }
}