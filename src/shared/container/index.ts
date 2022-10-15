import {container} from "tsyringe";
import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import {CategoriesRepository} from "../../modules/cars/repositories/CategoriesRepository";
import {ISpecificationsRepository} from "../../modules/especifications/repositories/ISpecificationsRepository";
import {SpecificationsRepository} from "../../modules/especifications/repositories/SpecificationsRepository";
import {IUsersRepository} from "../../modules/users/repositories/IUsersRepository";
import {UsersRepository} from "../../modules/users/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)