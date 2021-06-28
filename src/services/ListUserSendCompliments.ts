import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsService {

    async excecute(user_id: string) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                userReceiver: user_id
            }
        });
        
        return compliments;

    }

}

export { ListUserSendComplimentsService }