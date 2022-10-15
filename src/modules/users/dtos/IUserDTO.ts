export class IUserDTO {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  driverLicense: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}