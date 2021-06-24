import { getCustomRepository } from "typeorm";
import { TagsRepositoires } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string) {
        const tagsRepositoires = getCustomRepository(TagsRepositoires);

        if (!name) {
            throw new Error("Incorrect name!")
        }

        // O await é utilizado para ver se uma busca já foi feita
        // O que é o findOne 
        // SELECT * from TAGS WHERE NAME = "name"
        const tagAlreadyExists = await tagsRepositoires.findOne({ name });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!")
        }

        // Salvando a TAG
        const tag = tagsRepositoires.create({ name });

        await tagsRepositoires.save(tag);

        return tag;

    }

}

export { CreateTagService };