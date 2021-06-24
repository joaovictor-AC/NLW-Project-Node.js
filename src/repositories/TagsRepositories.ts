import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagsRepositoires extends Repository <Tag> {}

export { TagsRepositoires };