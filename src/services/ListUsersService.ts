import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

class ListUserService {

    async execute() {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.find();

        return classToPlain(user);

    }

}

export { ListUserService };