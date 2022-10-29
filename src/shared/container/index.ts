import {container} from "tsyringe";
import {SpecificationsRepository} from "@modules/especifications/repositories/SpecificationsRepository";
import {ISpecificationsRepository} from "@modules/especifications/repositories/ISpecificationsRepository";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";
import {UsersRepository} from "@modules/users/repositories/implementations/UsersRepository";
import {CategoriesRepository} from "@modules/cars/repositories/CategoriesRepository";
import {IUsersRepository} from "@modules/users/repositories/IUsersRepository";


container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)