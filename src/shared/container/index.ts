import {container} from "tsyringe";
import {TypeormSpecificationsRepository} from "@modules/especifications/infra/typeorm/repositories/TypeormSpecificationsRepository";
import {ISpecificationsRepository} from "@modules/especifications/repositories/ISpecificationsRepository";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";
import {TypeormUserRepository} from "@modules/users/infra/typeorm/repositories/TypeormUserRepository";
import {TypeormCategoriesRepository} from "@modules/cars/infra/typeorm/repositories/TypeormCategoriesRepository";
import {IUsersRepository} from "@modules/users/repositories/IUsersRepository";


container.registerSingleton<ICategoriesRepository>("CategoryRepository", TypeormCategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationRepository", TypeormSpecificationsRepository);
container.registerSingleton<IUsersRepository>("UserRepository", TypeormUserRepository)