import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendCompliments";

class ListUserSendComplimentsController {

    async handle(request: Request, resposnse: Response) {

        const { user_id } = request;

        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.excecute(user_id);

        return resposnse.json(compliments);

    }

}

export { ListUserSendComplimentsController };