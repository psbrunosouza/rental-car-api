import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({name: 'driver_license'})
  driverLicense: string;

  @Column({name: 'is_admin'})
  isAdmin: boolean;

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
