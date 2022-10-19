import {UsersRepository} from "../../repositories/implementations/UsersRepository";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import {AppError} from "../../../../shared/errors/AppError";
import {inject, injectable} from "tsyringe";
import {deleteFile} from "../../../../utils/file";

interface IUserAvatar {
  userId: string;
  avatar: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}

  async execute({ userId, avatar }: IUserAvatar): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new AppError("User doesn't exists", 404);
    }

    if(user.avatar){
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar;

    return this.userRepository.save(user);
  }
}
