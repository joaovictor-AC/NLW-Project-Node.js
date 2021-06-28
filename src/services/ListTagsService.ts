import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositoires } from "../repositories/TagsRepositories";

class ListTagsService {
    
    async execute() {

        const tagsRespositories = getCustomRepository(TagsRepositoires);

        const tags = await tagsRespositories.find();

        // Criar novos objetos que já vem no banco de dados
        return classToPlain(tags);

    }

}

export { ListTagsService };