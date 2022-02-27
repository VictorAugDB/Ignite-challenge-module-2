import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not Exists");
    }
    if (user.admin !== true) {
      throw new Error("User must be admin to list");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
