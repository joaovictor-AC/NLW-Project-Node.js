import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {

    async handle(request: Request, resposnse: Response) {

        const { user_id } = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.excecute(user_id);

        return resposnse.json(compliments);

    }

}

export { ListUserReceiveComplimentsController };