import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        if (user_sender == user_receiver) {
            throw new Error("Incorrect User Receiver!");
        }

        const usersRepositories = getCustomRepository(UsersRepositories);

        // Default --> ID
        const usersReceiverExists = await usersRepositories.findOne(user_receiver);

        if (!usersReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }


        const compliments = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliments);

        return compliments;

    }

}

export { CreateComplimentService };