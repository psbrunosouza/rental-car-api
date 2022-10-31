import { AuthenticateUserUseCase } from "@modules/users/useCases/authenticateUser/AuthenticateUserUseCase";
import { UserRepositoryInMemory } from "@modules/users/repositories/in-memory/UserRepositoryInMemory";
import { IUserDTO } from "../../dtos/IUserDTO";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AppError } from "../../../../shared/errors/AppError";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeAll(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: IUserDTO = {
      driverLicense: "001333",
      email: "test@test.com",
      password: "123",
      name: "test",
    };

    await createUserUseCase.execute(user);

    const authenticateResult = await authenticateUserUseCase.execute(user);

    expect(authenticateResult).toHaveProperty("token");
  });

  it("should not be able to authenticate when user doesn't exists", async () => {
    await expect(async () => {
      await authenticateUserUseCase.execute({
        email: "error@error.com",
        password: "123",
      } as IUserDTO);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", async () => {
    await expect(async () => {
      const user: IUserDTO = {
        driverLicense: "001333",
        email: "test@test.com",
        password: "123",
        name: "test",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "test@test.com",
        password: "555",
      } as IUserDTO);
    }).rejects.toBeInstanceOf(AppError);
  });
});
