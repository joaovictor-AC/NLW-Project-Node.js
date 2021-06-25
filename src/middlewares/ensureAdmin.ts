import { NextFunction, Request, Response } from "express";

// Verificar ser o usuário é um admin
export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });

}