import {container} from "tsyringe";
import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import {CategoriesRepository} from "../../modules/cars/repositories/CategoriesRepository";
import {ISpecificationsRepository} from "../../modules/especifications/repositories/ISpecificationsRepository";
import {SpecificationsRepository} from "../../modules/especifications/repositories/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationRepository", SpecificationsRepository)