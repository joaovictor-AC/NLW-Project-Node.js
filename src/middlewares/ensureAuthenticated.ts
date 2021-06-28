import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token

    const authToken = request.headers.authorization;

    //Validar se o token está preenchido

    if (!authToken) {
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");

    
    // Validar se o token é válido
    
    try {

        const { sub } = verify(token, "eaa978157f3c67a75e8770ec82873394") as IPayload;

        request.user_id = sub;

        return next();

    } catch(err) {

        return response.status(401).end();

    }
    
    // Recuperar informações do usário

}